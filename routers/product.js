const express = require("express")
const router = express.Router()

const {getProductById, createProduct} = require("../controllers/product")
const {isSignedIn,isAuthenticate,isAdmin} = require("../controllers/auth")
const {getUserById} = require("../controllers/user")


router.param("userId",getUserById)
router.param("productId",getProductById)

router.post("/product/create/:userId", isSignedIn, isAuthenticate, isAdmin, createProduct )

module.exports = router;