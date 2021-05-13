const express = require("express");
const router = express.Router();

const Todo = require("../models/todos");

router.get("/", (req, res) => {
    Todo.find({}).exec((error, results) => {
        if(error) {
            res.status(400).json({ok: false, error})
        } else {
            res.status(201).json({ok: true, results})
        }
    })
});

router.post("/", (req, res) => {
    let body = req.body;

    let todo = new Todo({
        title: body.title,
        completed: body.completed,
        active: body.active
    });

    todo.save((error, savedTodo) => {
        if(error) {
            res.status(400).json({ok: false, error})
        } else {
            res.status(201).json({ok: true, savedTodo})
        }
    });
});

module.exports = router;