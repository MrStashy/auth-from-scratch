const { getSecretDb, postSecretDb } = require("../dal/secret.js");
const jwt = require('jsonwebtoken')

async function getSecretController(req, res) {
    const authKey = req.headers.bearer;
    const userId = Number(req.params.id);
  try {
    jwt.verify(authKey, process.env.JWT_TOKEN);
    const secrets = await getSecretDb(userId);
    res.status(200).json({ secrets });
  } catch (e) {
    console.log(e);
  }
}

async function postSecretController(req, res) {
  const userId = Number(req.params.id);
  const content = req.body.secret;
  const secret = await postSecretDb(userId, content);
  res.status(201).json({ secret });
}

module.exports = { getSecretController, postSecretController };
