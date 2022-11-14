const models = require("../models");
const { Users } = models;

module.exports = {
  // localhost:3000/auth/login
  getAuthLogin: async (req, res) => {
    const data = req.body;
    const userData = await Users.findOne({
      where: {
        email_user: data.email_user,
        password_user: data.password_user,
      },
    });
    // console.log(userData);
    // Mengecek apakah email sudah terdaftar
    if (userData) {
      res.status(200).json({
        statusCode: 200,
        status: "OK",
        message: "Kamu berhasil login",
      });
    } else {
      res.status(404).json({
        statusCode: 404,
        status: "Not Found",
        message: "Kamu belum terdaftar",
      });
    }
  },
  // localhost:3000/auth/register
  getAuthRegister: async (req, res) => {
    const data = req.body;
    // console.log(data);
    // Create a new user
    const userData = Users.findOne({ where: { email_user: data.email_user } });
    // console.log(userData);
    // Mengecek apakah user sudah pernah daftar atau belum
    if (userData.email_user == data.email_user) {
      res.status(500).json({
        statusCode: 500,
        status: "Internal Server Error",
        message: "Kamu sudah terdaftar",
      });
    } else {
      const addNewUsers = await Users.create(data);
      res.status(201).json({
        statusCode: 201,
        status: "Created",
        message: "Kamu berhasil register",
        data: addNewUsers,
      });
    }
  },
};
