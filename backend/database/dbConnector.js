const mongoose = require("mongoose")

const dbConnector = ()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then(console.log("Connected to the DB"))
}

module.exports = dbConnector