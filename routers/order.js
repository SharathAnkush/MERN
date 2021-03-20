const express = require("express")
const router = express.Router()

const {isSignedIn,isAuthenticate,isAdmin} = require("../controllers/auth")
const {getUserById,pushOderInPurchaseList} = require("../controllers/user")
const {updateStock} = require("../controllers/product")
const {getOrderById,createOrder,getAllOrders,getOrderStatus,updateStatus} = require("../controllers/order")


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

//Read
router.get(
    "/order/all/:userId",
    isSignedIn,
    isAuthenticate,
    isAdmin,
    getAllOrders
);

//Status Order
router.get("/order/status/:userId",isSignedIn,isAuthenticate,isAdmin,getOrderStatus)
router.put("/order/:orerId/status/:userId",isSignedIn,isAuthenticate,isAdmin,updateStatus)

module.exports = router;