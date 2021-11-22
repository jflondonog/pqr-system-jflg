const Solicitud = require("../models/Solicitud");


exports.crearSolicitud = async (req, res) => {
    try {
        solicitud = new Solicitud(req.body);
        await solicitud.save()
        res.send(solicitud);
    } catch (error) {
        console.log(error);
        res.status(500).send("Ocurrió un error")
    }
}

exports.obtenerSolicitudes = async (req, res) => {
    try {
        const solicitudes = await Solicitud.find();
        res.json(solicitudes)

    } catch (error) {
        console.log(error);
        res.status(500).send("Ocurrió un error")
    }
}

exports.responderSolicitud = async (req, res) => {
    try {
        const { description } = req.body;
        let solicitud = await Solicitud.findById(req.params.id)

        if(!solicitud) {
            res.status(404).json({ msg: "No existe la solicitud"})
        }

        solicitud.details.reply.description = description;
        solicitud.details.solicitud.status = true;

        solicitud = await Solicitud.findByIdAndUpdate({_id: req.params.id }, solicitud, {new: true})
        res.json(solicitud);

    } catch (error) {
        console.log(error);
        res.status(500).send("Ocurrió un error")
    }
}

exports.reclamarSolicitud = async (req, res) => {
    try {
        const { subject, description } = req.body;
        let solicitud = await Solicitud.findById(req.params.id)
        if(!solicitud) {
            res.status(404).json({ msg: "No existe la solicitud"})
        }
        solicitud.claim.claim.subject = subject;
        solicitud.claim.claim.description = description;


        solicitud = await Solicitud.findByIdAndUpdate({_id: req.params.id }, solicitud, {new: true})
        res.json(solicitud);

    } catch (error) {
        console.log(error);
        res.status(500).send("Ocurrió un error")
    }
}

exports.responderReclamo = async (req, res) => {
    try {
        const { description } = req.body;
        let solicitud = await Solicitud.findById(req.params.id)

        if(!solicitud) {
            res.status(404).json({ msg: "No existe la solicitud"})
        }

        solicitud.claim.reply.description = description;
        solicitud.claim.claim.status = true;


        solicitud = await Solicitud.findByIdAndUpdate({_id: req.params.id }, solicitud, {new: true})
        res.json(solicitud);

    } catch (error) {
        console.log(error);
        res.status(500).send("Ocurrió un error")
    }
}

exports.satisfaccionSolicitud = async (req, res) => {
    try {
        const { isSatisfied } = req.body;
        let solicitud = await Solicitud.findById(req.params.id)

        if(!solicitud) {
            res.status(404).json({ msg: "No existe la solicitud"})
        }

        solicitud.details.isSatisfied = isSatisfied;


        solicitud = await Solicitud.findByIdAndUpdate({_id: req.params.id }, solicitud, {new: true})
        res.json(solicitud);

    } catch (error) {
        console.log(error);
        res.status(500).send("Ocurrió un error")
    }
}

exports.obtenerSolicitud = async (req, res) => {
    try {
        let solicitud = await Solicitud.findById(req.params.id)

        if(!solicitud) {
            res.status(404).json({ msg: "No existe la solicitud"})
        }

        res.json(solicitud)

    } catch (error) {
        console.log(error);
        res.status(500).send("Ocurrió un error")
    }
}