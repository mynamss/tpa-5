const express = require("express");
const router = express.Router();

const { getAuthLogin, getAuthRegister } = require("../controllers/auth.controller");

// Daftar endpoints :
// localhost:3000/auth/login
router.post("/login", getAuthLogin);
// localhost:3000/auth/register
router.post("/register", getAuthRegister);

// Untuk melakukan export
// agar bisa diakses di file lain
module.exports = router;
