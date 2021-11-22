const express = require('express');
const conectarBD = require('./config/db');
const cors = require("cors")
const path = require("path")
const dotenv = require("dotenv").config();

//SERVIDOR
const app = express();

conectarBD();
app.use(cors())
app.use(express.static(path.join(__dirname, "cliente", "build")))
app.use(express.json());

app.use('/api/solicitudes', require('./routes/solicitud'));


// Right before your app.listen(), add this:
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "cliente", "build", "src/index.html"));
});

const port = process.env.PORT || 4000;
app.listen(port, () =>{
    console.log('El servidor está corriendo')
})