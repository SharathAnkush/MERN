const express = require("express")
const router = express.Router()

const {getProductById, createProduct,getProduct,photo,deleteProduct,updateProduct} = require("../controllers/product")
const {isSignedIn,isAuthenticate,isAdmin} = require("../controllers/auth")
const {getUserById} = require("../controllers/user")


router.param("userId",getUserById)
router.param("productId",getProductById)

router.post("/product/create/:userId", isSignedIn, isAuthenticate, isAdmin, createProduct )
router.get("/product/:producetId",getProduct);
router.get("/product/photo/:producetId",photo);

// Delete Product
router.delete("/product/:productId/:userId", isSignedIn, isAuthenticate, isAdmin, deleteProduct )

// Update Product
router.put("/product/:productId/:userId", isSignedIn, isAuthenticate, isAdmin, updateProduct)



module.exports = router;