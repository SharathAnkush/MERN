const mongoose = require("mongoose")
const express = require("express")
require('dotenv').config()

const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const app = express()
const authRouter = require("./routers/auth")
const userRouter = require("./routers/user")

// DB Connect
mongoose.connect("mongodb://localhost:27017/tshirt",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true

}).then(() => console.log("DB CONNECTED"))

// MiddleWares
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

//MY Router
app.use("/api", authRouter)
app.use("/api", userRouter)

//Port
const port = process.env.PORT || 8000

//Starting Server
app.listen(port,() => {console.log(`app is rurring on ${port}`)})
