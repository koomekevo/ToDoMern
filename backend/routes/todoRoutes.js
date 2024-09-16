const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");

// Route to create a new todo item
router.post("/todos", todoController.createTodo);

// Route to get all todo items
router.get("/todos", todoController.getAllTodos);

// Route to update a todo item
router.put("/todos/:id", todoController.updateTodo);

// Route to delete a todo item
router.delete("/todos/:id", todoController.deleteTodo);

module.exports = router;
