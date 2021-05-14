const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
let Schema = mongoose.Schema;

let todoSchema = new Schema({
    title: {
        type: String,
        required: [true, "Title is required"]
    },
    completed: {
        type: Boolean,
        default: false
    },
    active: {
        type: Boolean,
        default: true
    }

});

todoSchema.plugin(uniqueValidator, {message: "{PATH} should be unique"})
module.exports = mongoose.model("Todo", todoSchema);


/* title:único y obligatorio.
•completed: por defecto será false y representará si la tarea está hecha.
•active: por defecto será true y controlará si la tarea ha sido borrada. */