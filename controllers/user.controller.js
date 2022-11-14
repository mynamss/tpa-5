const models = require("../models");
const { Users } = models;

module.exports = {
  // localhost:3000/user
  getAllUser: async (req, res) => {
    const users = await Users.findAll();
    res.json({
      message: "Success",
      data: users,
    });
  },
  // localhost:3000/user/id
  getUserByID: async (req, res) => {
    const { id } = req.params;
    const users = await Users.findByPk(id);

    res.json({
      message: "Success get 1 data",
      data: users
    });
  },
  //  localhost:3000/user/id
  deleteUserByID: async (req, res) => {
    const { id } = req.params;
    const users = await Users.findByPk(id);
    if (users) {
      await Users.destroy({
        where: {
          id: id,
        },
      });
      res.json({
        message: "Success delete user",
        data: users,
      });
    } else {
      res.status(404).json({
        message: "Users not found",
      });
    }
  },
    //  localhost:3000/user/id
  updateUserByID: async (req, res) => {
    const { id } = req.params;
    const userData = req.body;
    const users = await Users.update(userData, {
      where: {
        id: id,
      },
    });
    res.status(200).json({
      message: "Data berhasil diperbarui",
      data: userData,
    });
  },
};
