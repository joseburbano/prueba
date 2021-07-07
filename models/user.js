const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  nombre: String,
  cedula: {
    type: String,
    unique: true,
  },
  active: Boolean,
});

module.exports = mongoose.model("user", userSchema);
