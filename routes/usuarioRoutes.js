const express = require("express");
const router = express.Router();
const personaController = require("../controllers/personaController");

router.post("/register", usuarioController.register);

module.exports = router;