const express = require('express');
const bcrypt = require('bcrypt');
const _ = require('underscore');
const Usuario = require('../models/usuario.model');
const { verificaToken, verificaAdmin_Role } = require('../midelwaress/autenticacion');
const app = express();

app.get('/usuario', (req, res) => {
    let desde = req.query.desde || 0;
    let limite = req.query.limite || 5;
    desde = Number(desde);
    limite = Number(limite);
    Usuario.find({}, 'nombre email role estado')
        .skip(desde)
        .limit(limite)
        .exec((err, usuarios) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err: err
                });
            }
            Usuario.count({}, (err, conteo) => {
                if (err) {
                    return res.status(400).json({
                        ok: false,
                        err: err
                    });
                }
                res.json({
                    ok: true,
                    cantidad: conteo,
                    usuarios: usuarios
                });
            });
        });
});
app.get('/usuario/:id', (req, res) => {
    let id = req.params.id;
    Usuario.findById(id, 'nombre email role estado')
        .exec((err, usuario) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err: err
                });
            }
            if (!usuario) {
                return res.status(400).json({
                    ok: false,
                    err: {
                        message: 'El id de la tarea no es válido'
                    }
                });
            }
            res.json({
                ok: true,
                usuario: usuario
            });
        });
});
app.post('/usuario', (req, res) => {
    let body = req.body;

    let usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
        role: body.role
    })

    usuario.save((err, usuarioDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err: err
            });
        }

        res.json({
            ok: true,
            usuario: usuarioDB
        });
    });

});
app.put('/usuario/:id', (req, res) => {

    let id = req.params.id;
    let body = _.pick(req.body, ['nombre', 'email', 'role']);
    console.log(body);
    Usuario.findByIdAndUpdate(id, body, { new: true, runValidators: true }, (err, usuarioDB) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }



        res.json({
            ok: true,
            usuario: usuarioDB
        });

    })

});
app.get('/activausuario/:id', (req, res) => {

    let id = req.params.id;
    let cambiaEstado = {
        estado: true
    }
    Usuario.findByIdAndUpdate(id, cambiaEstado, { new: true }, (err, usuarioDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err: err
            });
        }
        if (!usuarioDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Usuario no encontrado'
                }
            });
        }
        res.json({
            ok: true,
            message: 'Usuario Se actualizo correcta mente',
            usuario: usuarioDB
        });

    });

});
app.delete('/usuario/:id', (req, res) => {
    let id = req.params.id;
    let cambiaEstado = {
        estado: false
    }
    Usuario.findByIdAndUpdate(id, cambiaEstado, { new: true }, (err, usuarioDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err: err
            });
        }
        if (!usuarioDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Usuario no encontrado'
                }
            });
        }
        res.json({
            ok: true,
            message: 'Usuario Se actualizo correcta mente',
            usuario: usuarioDB
        });

    });
});

module.exports = app;