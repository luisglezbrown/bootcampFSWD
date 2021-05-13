const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
let Schema = mongoose.Schema;

const validRoles = {
    values: ["ADMIN", "USER"],
    message: "{VALUE} is not a valid role"
}

let userSchema = new Schema({
    username: {
        type: String,
        required: [true, "Username is required"] //Required recibe un array de dos elementos [true/false, mensaje de error].
    },
    email: {
        type: String,
        unique: true,  //Esto indica que debe ser único.
        required: [true, "Email is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    role: {
        type: String,
        default: "USER", //Lo que valdría por defecto
        enum: validRoles //Para definir los roles válidos
    },
    active: {
        type: Boolean,
        default: true
    }
});


userSchema.plugin(uniqueValidator, {message: "{PATH} should be unique"})
module.exports = mongoose.model("User", userSchema);