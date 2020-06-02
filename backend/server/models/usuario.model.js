const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} No es un rol válido'
};
let Schema = mongoose.Schema;

let usuarioSchema = Schema({
    nombre: {
        type: String,
        require: [true, 'El nombre es necesario']
    },
    email: {
        type: String,
        unique: true,
        require: [true, 'El Correo es necesario']
    },
    password: {
        type: String,
        require: [true, 'La contraseña es obligatoria']
    },
    role: {
        type: String,
        default: 'USER_ROLE',
        enum: rolesValidos
    },
    estado: {
        type: Boolean,
        default: true
    },

});

usuarioSchema.methods.toJson = function() {

    let user = this;
    let userObjet = user.toObject();
    delete userObjet.password;

    return userObjet;
}

usuarioSchema.plugin(uniqueValidator, {
    message: '{PATH} debe de ser único'
});

module.exports = mongoose.model('Usuario', usuarioSchema);