const prisma = require('../utils/prisma')

async function getSecretDb (userId) {
   return await prisma.secret.findMany( {
    where: {
        userId: userId
    }
   })
}

async function postSecretDb (userId, content) {
    return await prisma.secret.create({
        data: {
            userId: userId,
            content: content
        },
        include: {
            user: true
        }
    })
}

module.exports = { getSecretDb, postSecretDb }