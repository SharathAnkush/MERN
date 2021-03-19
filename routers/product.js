const express = require("express")
const router = express.Router()

const {getProductById, createProduct,getProduct,photo} = require("../controllers/product")
const {isSignedIn,isAuthenticate,isAdmin} = require("../controllers/auth")
const {getUserById} = require("../controllers/user")


router.param("userId",getUserById)
router.param("productId",getProductById)

router.post("/product/create/:userId", isSignedIn, isAuthenticate, isAdmin, createProduct )
router.get("/product/:producetId",getProduct);
router.get("/product/photo/:producetId",photo);

module.exports = router;