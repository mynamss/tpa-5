const express = require("express");
const router = express.Router();

const authRouter = require("./auth.router");
const userRouter = require("./user.router");
const todoRouter = require("./todo.router");

// Daftar endpoints :
// localhost:3000/
router.get("/", (req, res) => {
  res.status(200).json({
    message: "Success",
    desc: "Welcome to To Do List App",
  });
});
// localhost:3000/auth
router.use("/auth", authRouter);
// localhost:3000/user
router.use("/user", userRouter);
// localhost:3000/todo
router.use("/todo", todoRouter);

module.exports = router;
