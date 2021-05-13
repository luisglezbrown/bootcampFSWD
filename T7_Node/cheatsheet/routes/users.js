const express = require("express");
const router = express.Router();

const User = require("../models/users")

router.get("/", (req, res) => {
    //Como el find de Mongo, el filtro vacío devuelve todo!
    User.find({}).exec((error, lo_que_encuentre) => {
        if(error) {
            res.status(400).json({ok: false, error})
        } else {
            res.status(201).json({ok: true, lo_que_encuentre})
        }
    })
});

router.get("/:id", (req, res) => {
    let id = req.params.id;
    res.json({message: `Petición GET con parámetro: ${id}`})
});

router.post("/", (req, res) => {
    let body = req.body;
    
    let user = new User({
        username: body.username,
        email: body.email,
        password: body.password
    });

    //La función save nos envía dos parámetros: (error y el objeto guardado)
    user.save((error, savedUser) => {
        if(error) {
            res.status(400).json({ok: false, error})
        } else {
            res.status(201).json({ok: true, savedUser})
        }
    });

/*     if(body.username) {
        res.status(200).json({message: `Username recibido: ${body.username}`});
    } else {
        res.status(400).json({ok: false, message: "El username es obligatorio"});
    } */
});

module.exports = router;