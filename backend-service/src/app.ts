import Fastify from 'fastify'
import prismaPlugin from './plugins/prisma'
import { healthRoute } from './routes'

const buildApp = () => {
  const app = Fastify({ logger: true })

  app.register(prismaPlugin)
  app.register(healthRoute, { prefix: '/health' })

  return app
}

export default buildApp
