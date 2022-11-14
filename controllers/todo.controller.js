const models = require("../models");
const { Todos, Users } = models;

module.exports = {
  // localhost:3000/todo
  getAllToDo: async (req, res) => {
    const todos = await Todos.findAll({ include: Users });
    res.json({
      message: "Success get all To Do",
      data: todos,
    });
  },
  // localhost:3000/todo/id
  getToDoByID: async (req, res) => {
    const { id } = req.params;
    const todos = await Todos.findByPk(id);
    // Checking ketersediaan data
    if (todos) {
      res.status(200).json({
        message: "Success get To Do by ID",
        data: todos,
      });
    }
    return res.status(404).json({
      statusCode: 404,
      message: "Users not found",
    });
  },
  // Menambahkan to do
  // localhost:3000/todo/add
  addToDo: async (req, res) => {
    const data = req.body;
    // Menambahkan todo baru
    const addToDos = await Todos.create(data);
    res.status(201);
    res.json({
      status: "success",
      message: "Berhasil menambahkan To Do",
      data: addToDos,
    });
  },
  // Menghapus To Do by ID
  deleteToDoByID: async (req, res) => {
    const { id } = req.params;
    const todos = await Todos.findByPk(id);
    // Mengecek ketersediaan to do sebelum dihapus
    if (todos) {
      await todos.destroy({
        where: {
          id: id,
        },
      });
      res.json({
        message: "Success delete todo",
        data: todos,
      });
    } else {
      res.status(404).json({
        message: "To Do not found",
      });
    }
  },
  // Memperbarui to do
  updateToDoByID: async (req, res) => {
    const { id } = req.params;
    const todoData = req.body;
    const todos = await Todos.update(todoData, {
      where: {
        id: id,
      },
    });
    res.status(200).json({
      message: "Data berhasil diperbarui",
      data: todoData,
    });
  },
};
