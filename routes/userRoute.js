const express = require("express");
const { userRegister } = require("../controller/userController");

//router
const router = express.Router();

//routers
router.post("/register", userRegister);

//login
router.post("/login", (req, res) => {
  res.json({ message: "login successfully" });
});

module.exports = router;
