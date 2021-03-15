const express = require("express")
const router  = express.Router()
const {getUserById ,getUser,updateUser,usePurchaseList} = require("../controllers/user")
const {isSignedIn, isAuthenticate,isAdmin} = require("../controllers/auth")

router.param("userId", getUserById);
router.get("/user/:userId", isSignedIn,isAuthenticate,getUser);
router.put("/user/:userId", isSignedIn,isAuthenticate,updateUser);
router.put("/orders/user/:userId", isSignedIn,isAuthenticate,updateUser,usePurchaseList);
module.exports = router ;