const express = require("express");
const app = express();

//Antes de los endoints, usamos los middlewares
app.use(express.json());

app.get("/", (req, res) => {
    res.json({message: "Petición GET recibido correctamente"});
});

app.get("/:id", (req, res) => {
    let id = req.params.id;
    res.json({message: `Petición GET con parámetro: ${id}`})
});

app.post("/", (req, res) => {
    let body = req.body;
    console.log(body.username + ' vive en la calle ' + body.address.street);
    
    if(body.username) {
        res.status(200).json(
            {
                message: `Username recibido: ${body.username}`
            });
    } else {
        res.status(400).json(
            {
                ok: false,
                message: "El username es obligatorio"
            });
    }


});

app.listen(3000);