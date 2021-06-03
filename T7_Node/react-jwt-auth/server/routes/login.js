const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/users");

router.post("/", (req, res) => {
    const body = req.body;

    User.findOne({email: body.email}, (error, userDB) => {
        if(error) {
            res.status(500).json({ok: false, error});
        } else if (!userDB) {
            res.status(400).json({ok: false, error: "Email not found"});
        } else if (!bcrypt.compareSync(body.password, userDB.password)) {
            res.status(400).json({ok: false, error: "Invalid Password"});
        }else {
            const token = jwt.sign(
                {user: userDB},  //el payload que contiene los datos a almacenar en el token.
                process.env.SEED, //la semilla, es un string que va a servir de contraseña
                {expiresIn: 20} //El tiempo de validez del token
            );

            res.status(200).json({ok: true, token, user: userDB});
        }
    })
});

module.exports = router;