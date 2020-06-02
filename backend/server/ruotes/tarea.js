const express = require('express');
const { verificaToken, verificaAdmin_Role } = require('../midelwaress/autenticacion');
const _ = require('underscore');
const Tarea = require('../models/tarea.model');
const app = express();

app.get('/tareas', (req, res) => {
    Tarea.find({}).exec((err, tareas) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err: err
            });
        }
        Tarea.count({}, (err, conteo) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err: err
                });
            }
            res.json({
                ok: true,
                cantidad: conteo,
                tareas: tareas
            });
        });
    });
});
app.get('/tarea/:id', (req, res) => {
    let id = req.params.id;
    Tarea.findById(id, 'nombre prioridad fechaVencimiento fechaCreacion autor asignadoA estado').exec((err, tarea) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err: err
            });
        }
        if (!tarea) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'El id de la tarea no es válido'
                }
            });
        }

        res.json({
            ok: true,
            tarea: tarea
        });
    });
});

app.post('/tarea', (req, res) => {
    let body = req.body;
    let tarea = new Tarea({
        nombre: body.nombre,
        prioridad: body.prioridad,
        fechaVencimiento: body.fechaVencimiento,
        asignadoA: body.asignadoA,
        autor: body.autor
    });
    tarea.save((err, tareaDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err: err
            });
        }
        if (!tareaDB) {
            return res.status(400).json({
                ok: false,
                err: err
            });
        }
        res.json({
            ok: true,
            Tarea: tareaDB
        });
    });
});
app.put('/tarea/:id', (req, res) => {
    let id = req.params.id;
    let body = _.pick(req.body, ['nombre', 'prioridad', 'fechaVencimiento', 'asignadoA', 'estado']);
    Tarea.findByIdAndUpdate(id, body, { new: true, runValidators: true }, (err, tareaDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err: err
            });
        }
        if (!tareaDB) {
            return res.status(400).json({
                ok: false,
                err: err
            });
        }
        res.json({
            ok: true,
            tarea: tareaDB
        });
    });
});
app.get('/activartarea/:id', (req, res) => {
    let id = req.params.id;
    let cambiaEstado = {
        estado: true,
        estadoTarea: 'En proceso'
    }
    Tarea.findByIdAndUpdate(id, cambiaEstado, { new: true }, (err, tareaDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err: err
            });
        }
        if (!tareaDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Tarea no encontrada'
                }
            });
        }
        res.json({
            ok: true,
            message: 'La Tareas Se actualizo correcta mente',
            tarea: tareaDB
        });

    });
});
app.delete('/tarea/:id', (req, res) => {
    let id = req.params.id;
    let cambiaEstado = {
        estado: false,
        estadoTarea: 'Finalizada'
    }
    Tarea.findByIdAndUpdate(id, cambiaEstado, { new: true }, (err, tareaDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err: err
            });
        }
        if (!tareaDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'Tarea no encontrada'
                }
            });
        }
        res.json({
            ok: true,
            message: 'La Tareas Se actualizo correcta mente',
            tarea: tareaDB
        });

    });
});

module.exports = app;