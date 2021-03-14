const express = require("express")
const router  = express.Router()
const {getUserById ,getUser} = require("../controllers/user")
const {isSignedIn, isAuthenticate,isAdmin} = require("../controllers/auth")

router.param("userId", getUserById);
router.get("/user/:userId", isSignedIn,isAuthenticate,getUser);

module.exports = router ;