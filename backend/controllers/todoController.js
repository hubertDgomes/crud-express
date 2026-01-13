const todoSchema = require("../models/todoSchema")

// All of the controller that existed here


const getTODOS = async (req, res) => {
    const todoList = await todoSchema.find()
    res.json(todoList)
}

const saveTODO = (req, res) => {
    const { toDo } = req.body
    const user = todoSchema({
        toDo: toDo
    })
    user.save()
    res.send(user)
}

const updateTODO = (req, res) => {
    const { id } = req.params
    const { toDo } = req.body
    todoSchema.findByIdAndUpdate(id, { toDo })
        .then(() => res.send("Updated!!"))
}

const deleteTODO = (req, res) => {
    const { id } = req.params
    todoSchema.findByIdAndDelete(id)
        .then(() => res.send("Deleted!!"))
}

module.exports = {
    getTODOS, saveTODO, updateTODO, deleteTODO
}