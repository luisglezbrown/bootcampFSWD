//Importamos el archivo config con las variables de entorno
require("./config/config");

const mongoose = require("mongoose");
const express = require("express");
const app = express();

const users = require("./routes/users")

//Antes de los endoints, usamos los middlewares
app.use(express.json());

//El primer argumento define el sufijo que vamos a poner
//El segundo importa el módulo del router
app.use("/users", users);

mongoose.connect("mongodb://localhost:27017/users", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const db = mongoose.connection;

db.on("error", err => console.log("Connection to DB failed"));
db.once("open", () => console.log("Connected to DB successfuly"));

app.listen(
    process.env.PORT, 
    () => console.log("Listening on port:", process.env.PORT));