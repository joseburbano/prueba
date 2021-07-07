const Carros = require("../models/carro");

exports.carrosHome = (err, req, res, next) => {
  console.error(err.stack);
  next();
  res.render("index");

};

const carros = [
  {
    modelo: "mazda3",
    precio: 20000,
  },
  {
    modelo: "mazda2",
    precio: 10000,
  },
];

exports.tiposCarros = (req, res) => {
  res.status(200).json({ code: 200, carros });
};

exports.mostarCarros = (req, res) => {
  res.render("carros");
};

exports.nuevoCarro = async (req, res) => {
  const body = req.body;

  const carro = new Carros(body);

  await carro.save((err, carroStored) => {
    if (err) {
      res.status(500).json({ code: 500, message: "Error de servidor" });
    } else {
      if (!carroStored) {
        res
          .status(404)
          .json({ code: 404, message: "Error al guardar este datos" });
      } else {
        res.status(200).json({ code: 200, message: "Guadado correctamente" });
      }
    }
  });
};

exports.deleteCarro = (req, res) => {
  try {
    const { id } = req.params;

    Carros.findByIdAndRemove(id, (err, carroStored) => {
      if (err) {
        res.status(500).json({ code: 500, message: "Error de servidor" });
      } else {
        if (!carroStored) {
          res
            .status(404)
            .json({ code: 404, message: "Error al eliminar este datos" });
        } else {
          res
            .status(200)
            .json({ code: 200, message: "Eliminado correctamente" });
        }
      }
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      message: "Error del servidor.",
    });
  }
};
