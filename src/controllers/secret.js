const { getSecretDb, postSecretDb } = require('../dal/secret.js')

async function getSecretController (req, res) {
    const userId = Number(req.params.id)
    const secrets = await getSecretDb(userId)
    res.status(200).json({ secrets })
}

async function postSecretController (req, res) {
    const userId = Number(req.params.id)
    const content = req.body.secret
    const secret = await postSecretDb(userId, content)
    res.status(201).json({ secret })
}




module.exports = { getSecretController, postSecretController }