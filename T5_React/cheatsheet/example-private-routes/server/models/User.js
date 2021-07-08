const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  role: {
    type: String,
    default: "USER",
  }
});

userSchema.methods.toJSON = function() {
    const userObject = this.toObject();
    delete userObject.password;
  
    return userObject;
  };
  
module.exports = mongoose.model("User", userSchema);
