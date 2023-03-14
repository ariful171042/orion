const mongooes = require("mongoose");

const Schema = mongooes.Schema();
const userSchema = new mongooes.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = ("User", userSchema);
