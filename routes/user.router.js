const express = require("express");
const router = express.Router();

const {
  getAllUser,
  getUserByID,
  deleteUserByID,
  updateUserByID,
} = require("../controllers/user.controller");

// Daftar endpoints:
// localhost:3000/user/
router.get("/", getAllUser);
// localhost:3000/user/id
router.get("/:id", getUserByID);
// router.post("/add", addUser);
// localhost:3000/user/id
router.delete("/:id", deleteUserByID);
// localhost:3000/user/id
router.put("/:id", updateUserByID);

// export router
module.exports = router;
