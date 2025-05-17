// src/api/v1/auth/route.ts

import { FastifyPluginAsync } from 'fastify'
import { Application } from '../../../../application'

const app = new Application()

const authRoute: FastifyPluginAsync = async (fastify) => {
  fastify.post('/login', async (request, reply) => {
    const input = request.body as { email: string; password: string }

    const result = await app.auth.login(input)

    return reply.send(result)
  })

  fastify.post('/register', async (request, reply) => {
    const input = request.body as { email: string; password: string }

    const result = await app.auth.register(input)

    return reply.send(result)
  })
}

export { authRoute }
