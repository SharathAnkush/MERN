const express = require("express")
const router = express.Router()
const {check} = require("express-validator")
const {signup,signin,signout} = require("../controllers/auth")

    //SIGN UP
router.post("/signup", 
[
  check("name", "name should be at least 3 char").isLength({ min: 3 }),
  check("email", "email is required").isEmail(),
  check("password", "password should be at least 3 char").isLength({ min: 3 })
],
signup)

// SIGN IN
router.post("/signin",
[
  check("email", "email is required").isEmail(),
  check("password", "password should be at least 3 char").isLength({ min: 3 })
], signin)

 //SIGN OUT
router.get("/signout",signout)

module.exports = router ;