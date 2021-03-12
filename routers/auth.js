const express = require("express")
const router = express.Router()
const {check} = require("express-validator")
const {signout,signin} = require("../controllers/auth")

router.get("/signout",
    check("name").isLength({min:3}).withMessage("must be at least 3 chars long"), signout)
router.post("/signin",
    check("name").isLength({min:3}).withMessage("must be at least 3 chars long"), signin)

module.exports = router ;