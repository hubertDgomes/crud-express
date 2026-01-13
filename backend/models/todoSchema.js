const mongoose = require("mongoose")
const { Schema } = mongoose;


const todoSchema = new Schema({
    toDo: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("todoList", todoSchema)

