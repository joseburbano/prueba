const express = require("express");
const path = require("path");
//body parser
const bodyParser = require("body-parser");

//importar rutas
const homeRoutes = require("./routes/home");
const carrosHomeRoutes = require("./routes/carrosHome");

//crear app en express
const app = express();
const { API_VERSION } = require("./config");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//donde cargar los archivos estaticos
app.use(express.static("public"));

//habilitar pug
app.set("view engine", "pug");

//añadir carpetas
app.set("views", path.join(__dirname, "./views"));

//Rutas basicas
app.use(`/api/${API_VERSION}`, homeRoutes);
app.use(`/`, carrosHomeRoutes);

module.exports = app;
