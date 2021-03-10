const express = require("express")
const router = express.Router()
const {signout,signin} = require("../controllers/auth")

router.get("/signout",signout)
router.post("/signin",signin)

module.exports = router ;