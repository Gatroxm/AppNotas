const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let prioridades = {
    values: ['Alta', 'Media', 'Baja'],
    message: '{VALUE} No es una prioridad Válida'
};
let EstadosTarea = {
    values: ['En proceso', 'Finalizada'],
    message: '{VALUE} No es un Estado Válido'
}
let tareaSchema = Schema({
    nombre: {
        type: String,
        require: [true, 'el nombre es requerido']
    },
    prioridad: {
        type: String,
        default: 'Baja',
        enum: prioridades
    },
    fechaVencimiento: {
        type: String,
        require: [true, 'La fecha de vencimiento es requerida']
    },
    fechaCreacion: {
        type: String,
        default: new Date()
    },
    autor: {
        type: String,
        require: [true, 'El autor es requerido']
    },
    asignadoA: {
        type: String,
        require: false
    },
    estado: {
        type: Boolean,
        default: true
    },
    estadoTarea: {
        type: String,
        default: 'En proceso',
        enum: EstadosTarea
    }
});

module.exports = mongoose.model('Tarea', tareaSchema);