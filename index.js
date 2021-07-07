const mongoose = require("mongoose");
const app = require("./app");
const port = process.env.PORT || 4000;
const { API_VERSION, PORT_DB, IP_SERVER } = require("./config");

mongoose.connect(
  `mongodb://${IP_SERVER}:${PORT_DB}/carros`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useNewUrlParser: true,
  },
  (err, res) => {
    if (err) {
      console.log("Error al conectar con la base de datos");
      throw new Erro("problemas con base de datos");
    } else {
      console.log("La conexión de la base de datos es correcta.");

      app.listen(port, () => {
        console.log("#########");
        console.log("API REST CARROS");
        console.log("#########");
        console.log("#########");
        console.log(`http://${IP_SERVER}:${port}/api/${API_VERSION}`);
      });
    }
  }
);
