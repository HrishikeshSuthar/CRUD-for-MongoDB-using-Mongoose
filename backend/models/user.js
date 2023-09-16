const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
});

const User = new mongoose.model("Users", userSchema);

module.exports = User;
