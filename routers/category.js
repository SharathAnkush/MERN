const express = require("express")
const router = express.Router()
const {getCategoryById, createCategory, getCategory, getAllCategory,updateCategory} = require("../controllers/category")
const {isSignedIn, isAuthenticate, isAdmin} = require("../controllers/auth")
const {getUserById} = require("../controllers/user")

//Param
router.param("userId",getUserById)
router.param("categoryId", getCategoryById)

//Router
router.post("/category/create/:userId", isSignedIn, isAuthenticate, isAdmin, createCategory )

router.get("/category/:categoryId", getCategory)
router.get("/categories", getAllCategory)

//Update
router.put("/category/:categoryId/:userId", isSignedIn, isAuthenticate, isAdmin, updateCategory )


module.exports = router;