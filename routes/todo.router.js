const express = require("express");
const router = express.Router();

const { getAllToDo, getToDoByID, addToDo, deleteToDoByID, updateToDoByID } = require("../controllers/todo.controller");

// localhost:3000/todo/
router.get("/", getAllToDo);
// localhost:3000/todo/id
router.get("/:id", getToDoByID);
// localhost:3000/todo/add
router.post("/add", addToDo);
// localhost:3000/todo/id
router.delete("/:id", deleteToDoByID);
// localhost:3000/todo/id
router.put("/:id", updateToDoByID);

module.exports = router;
