const { registerControllerDb } = require('../dal/register')

async function registerController(req, res) {
  const { username, password } = req.body
    const user = await registerControllerDb(username, password)
}

module.exports = { registerController };
