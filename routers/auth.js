const express = require("express")
const router = express.Router()
const {check} = require("express-validator")
const {signup,signin,signout} = require("../controllers/auth")

    //SIGN IN 
router.get("/signup", 
[
  check("name", "name should be at least 3 char").isLength({ min: 3 }),
  check("email", "email is required").isEmail(),
  check("password", "password should be at least 3 char").isLength({ min: 3 })
],
signup)

  //check("name").isLength({min:3}).withMessage("must be at least 3 chars long"), signup)
    //SIGN IN
router.post("/signin", signin)
  //  check("name").isLength({min:3}).withMessage("must be at least 3 chars long"), signin)
    //SIGN OUT
router.get("/signout",signout)

module.exports = router ;