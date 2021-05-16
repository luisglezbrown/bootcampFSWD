const express = require("express");
const ramda = require("ramda");
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

router.put("/:id", (req, res) => {
    const id = req.params.id;
    const body = ramda.pick(["completed"], req.body);

    Todo.findByIdAndUpdate(
        id,
        body,
        {new: true, runValidators: true, context: "query"},
        (error, updatedTodo) => {
            if(error) {
                res.status(400).json({ok: false, error})
            } else {
                res.status(200).json({ok: true, updatedTodo})
            }
        }
    );
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;

    Todo.findByIdAndUpdate(
        id,
        {active: false},
        {new: true, runValidators: true, context: "query"},
        (error, updatedTodo) => {
            if(error) {
                res.status(400).json({ok: false, error})
            } else if(!updatedTodo) {
                res.status(400).json({ok: false, error: "Task not found"})
            } else {
                res.status(200).json({ok: true, updatedTodo})
            }
        }
    );
});

module.exports = router;