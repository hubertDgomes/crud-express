const express = require("express")
const mongoose = require("mongoose")
const app = express();
var cors = require('cors');
const dbConnector = require("./database/dbConnector");
require('dotenv').config()
const route = require("./routes/ToDoRoutes.js")

app.use(express.json())
app.use(cors())


dbConnector()
app.use("/api",route)

app.listen(3000,()=>{
    console.log("Server is running at http://localhost:3000");
})