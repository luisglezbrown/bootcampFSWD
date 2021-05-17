const express = require("express");
const app = express();

//El primer argumento define el sufijo que vamos a poner
//El segundo importa el módulo del router
app.use("/users", require("./users"));
app.use("/login", require("./login"));

module.exports = app;