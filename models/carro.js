const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  modelo: String,
  marca: String,
  placa: {
    type: String,
    unique: true,
  },
  active: Boolean,
});

module.exports = mongoose.model("carro", userSchema);