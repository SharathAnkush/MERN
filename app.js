const mongoose = require("mongoose")
const express = require("express")
require('dotenv').config()

const app = express()

mongoose.connect("mongodb://localhost:27017/tshirt",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true

}).then(() => console.log("DB CONNECTED") )

const port = process.env.PORT || 8000

app.listen(port,() => {console.log(`app is rurring on ${port}`)})
