const userModel = require("../models/userModel");

//register user
const userRegister = (req, res) => {
  res.json({ message: "userRegister" });
};

module.exports = {
  userRegister,
};
