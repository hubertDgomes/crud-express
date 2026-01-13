const express = require("express")
const { getTODOS, saveTODO, updateTODO, deleteTODO } = require("../controllers/todoController")
const router = express.Router()

router.use(express.json())

router.get("/get", getTODOS)
router.post("/save", saveTODO)
router.put("/update/:id", updateTODO)
router.delete("/delete/:id", deleteTODO)

module.exports = router
