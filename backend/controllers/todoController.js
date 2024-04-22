const Todo = require("../models/Todo");

// Controller for handling CRUD operations
const todoController = {
  // Create a new todo item
  createTodo: async (req, res) => {
    try {
      const { title, description } = req.body;
      const newTodo = new Todo({
        title,
        description,
      });
      await newTodo.save();
      res
        .status(201)
        .json({ message: "Todo item created successfully", todo: newTodo });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Get all todo items
  getAllTodos: async (req, res) => {
    try {
      const todos = await Todo.find();
      res.status(200).json(todos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Update a todo item
  updateTodo: async (req, res) => {
    try {
      const { id } = req.params;
      const { title, description } = req.body;
      const updatedTodo = await Todo.findByIdAndUpdate(
        id,
        { title, description },
        { new: true }
      );
      res.status(200).json(updatedTodo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Delete a todo item
  deleteTodo: async (req, res) => {
    try {
      const { id } = req.params;
      await Todo.findByIdAndDelete(id);
      res.status(200).json({ message: "Todo item deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = todoController;
