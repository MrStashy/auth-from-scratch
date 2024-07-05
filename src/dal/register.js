const prisma = require('../utils/prisma')

async function registerControllerDb (username, password) {
    return prisma.user.create({
        data: {
            username: username,
            password: password,
        },
    })
}

module.exports = { registerControllerDb }