const { registerControllerDb } = require('../dal/register')

async function registerController(req, res) {
  const { username, password } = req.body
    const user = await registerControllerDb(username, password)
    res.status(201).json({ user })
}

module.exports = { registerController };
