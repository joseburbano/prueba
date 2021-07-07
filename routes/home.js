const express = require("express");

const api = express.Router();

//controlador
const homeController = require("../controller/homeController");



//carros 
api.get("/carros", homeController.tiposCarros);
api.post("/nuevo-carro", homeController.nuevoCarro);
api.get("/nuevo-carro/:id", homeController.deleteCarro);

module.exports = api;
