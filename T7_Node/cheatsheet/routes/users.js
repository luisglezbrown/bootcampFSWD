const express = require("express");
const ramda = require("ramda");
const router = express.Router();
const bcrypt = require("bcrypt");

const User = require("../models/users");
const verifyToken = require("../middlewares/auth")

const middleware1 = (req, res, next) => {
    console.log("Hola desde el middleware1");
    next();
}

const middleware2 = (req, res, next) => {
    console.log("Hola desde el middleware2");
    next();
}

router.get("/", verifyToken, async (req, res) => {
    //Como el find de Mongo, el filtro vacío devuelve todo!
    const PAGE_SIZE = 2;
    const page = req.query.page || 1;

    const count = await User.count();

    User.find({})
    .skip((page - 1) * PAGE_SIZE) //Nº de documentos que saltará
    .limit(PAGE_SIZE) //Nº de documentos que devolverá
    .exec((error, lo_que_encuentre) => {
        if(error) {
            res.status(400).json({ok: false, error})
        } else {
            res.status(201).json({ok: true, count, results: lo_que_encuentre})
        }
    })
});

router.post("/", (req, res) => {
    let body = req.body;
    
    let user = new User({
        username: body.username,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10)
    });

    //La función save nos envía dos parámetros: (error y el objeto guardado)
    user.save((error, savedUser) => {
        if(error) {
            res.status(400).json({ok: false, error})
        } else {
            res.status(201).json({ok: true, savedUser})
        }
    });
});

router.put("/:id", (req, res) => {
    const id = req.params.id;
    const body = ramda.pick(["username", "email"], req.body);

    User.findByIdAndUpdate(
        id, //El _id de mongo
        body,
        {new: true, runValidators: true, context: "query"}, //Options
        (error, updatedUser) => { //Función Callback
            if(error) {
                res.status(400).json({ok: false, error})
            } else {
                res.status(200).json({ok: true, updatedUser})
            }
        }
    );
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;

/*     User.findByIdAndRemove(id, (error, removedUser) => {
        if(error) {
            res.status(400).json({ok: false, error})
        } else {
            res.status(200).json({ok: true, removedUser})
        }
    }); */

    User.findByIdAndUpdate(
        id, //El _id de mongo
        {active: false},
        {new: true, runValidators: true, context: "query"}, //Options
        (error, updatedUser) => { //Función Callback
            if(error) {
                res.status(400).json({ok: false, error})
            } else if(!updatedUser) {
                res.status(400).json({ok: false, error: "User not found"})
            } else {
                res.status(200).json({ok: true, updatedUser})
            }
        }
    );
});

module.exports = router;