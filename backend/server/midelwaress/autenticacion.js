const jwt = require('jsonwebtoken');
//======================
// Verificar token
//======================

let verificaToken = (req, res, next) => {

    let token = req.get('token');

    jwt.verify(token, process.env.SEED_TOKEN, (err, decode) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token no válido'
                }
            });
        }
        req.usuaro = decode.usuaro;

        next();
    });

};


module.exports = {
    verificaToken
};