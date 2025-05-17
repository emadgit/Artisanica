import Fastify from 'fastify'
import prismaPlugin from '../../plugins/prisma'
import { healthRoute, authRoute } from './routes'

const buildApp = () => {
  const app = Fastify({ logger: true })

  app.register(prismaPlugin)
  app.register(healthRoute, { prefix: '/api/v1/' })
  app.register(authRoute, { prefix: '/api/v1/' })

  return app
}

export default buildApp
