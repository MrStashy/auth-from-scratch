const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
    await createUser()
}

async function createUser () {
    const customer = await prisma.user.create({
        data: {
            username: "Will",
            password: "password123",
            secrets: {
                create: {
                    content: "XXXX"
                }
            }
        }
    })
}


seed()