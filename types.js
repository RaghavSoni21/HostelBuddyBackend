const zod = require('zod')

const createTodo = zod.object({
    title: zod.string(),
    description: zod.string()
})

const createUser = zod.object({
    username: zod.string(),
    password: zod.string()
})

module.exports = {
    createTodo: createTodo,
    createUser: createUser
}