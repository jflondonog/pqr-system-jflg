const mongoose = require('mongoose');

const SolicitudSchema = mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    details: {
        type: {},
        required: true
    },
    claim: {
        type: {},
        required: true
    }
});

module.exports = mongoose.model('Solicitud', SolicitudSchema)