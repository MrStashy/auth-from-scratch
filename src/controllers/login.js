const { loginDb } = require('../dal/login')

async function loginController (req, res) {
    const { username, password } = req.body
    const token = await loginDb(username, password)
    console.log(token)
    res.status(200).json({ token })
}

module.exports = { loginController }