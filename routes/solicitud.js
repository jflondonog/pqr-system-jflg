/* Rutas para Solicitud */

const express = require('express');
const router = express.Router();
const solicitudController = require('../controllers/solicitudController')

router.post('/', solicitudController.crearSolicitud);
router.get('/', solicitudController.obtenerSolicitudes);
router.get('/:id', solicitudController.obtenerSolicitud);
router.put('/responder/:id', solicitudController.responderSolicitud);
router.put('/reclamar/:id', solicitudController.reclamarSolicitud);
router.put('/responderReclamo/:id', solicitudController.responderReclamo);
router.put('/satisfacion/:id', solicitudController.satisfaccionSolicitud);

module.exports = router;