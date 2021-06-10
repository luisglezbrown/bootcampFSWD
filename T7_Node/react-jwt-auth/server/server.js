//Importamos el archivo config con las variables de entorno
require("./config/config");

const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();

//Antes de los endoints, usamos los middlewares
app.use(express.json());
app.use(cors());

app.use(require("./routes/index"));

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