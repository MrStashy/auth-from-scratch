const prisma = require('../utils/prisma')
const jwt = require('jsonwebtoken')

async function loginDb(username, password) {
    const user = await prisma.user.findUnique({
        where: {
            username: username
        }
    })
    
    if (user.username === username && user.password === password) {
        const payload = { username: user.username }
        const token = jwt.sign(payload, process.env.JWT_TOKEN)

        return token
    } else {
        return 'tits'
    }
}

module.exports = { loginDb }