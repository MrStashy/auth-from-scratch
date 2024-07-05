const express = require("express");
const router = express.Router();
const { getSecretController, postSecretController } = require("../controllers/secret.js")


router.get("/:id", getSecretController)
router.post("/:id", postSecretController)

module.exports = router