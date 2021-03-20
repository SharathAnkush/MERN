const express = require("express")
const router = express.Router()

const {isSignedIn,isAuthenticate,isAdmin} = require("../controllers/auth")
const {getUserById,pushOderInPurchaseList} = require("../controllers/user")
const {updateStock} = require("../controllers/product")
const {getOrderById,createOrder} = require("../controllers/order")


router.param("userId", getUserById)
router.param("orderId", getOrderById)

//create 
router.post(
    "/order/create/:userId",
    isSignedIn,
    isAuthenticate,
    pushOderInPurchaseList,
    updateStock,
    createOrder 
);

module.exports = router;