const express = require("express");

const api = express.Router();
//controlador
const homeController = require("../controller/homeController");


//inicio
api.get("/inicio", homeController.carrosHome);
//carros
api.get("/carros", homeController.mostarCarros);
module.exports = api;
