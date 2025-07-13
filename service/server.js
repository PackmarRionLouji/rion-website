// backend/server.js
import Fastify from 'fastify'
import cors from '@fastify/cors'

const fastify = Fastify({ logger: true })

await fastify.register(cors, {
  origin: '*', // Allow all origins — change in production!
})

// Sample route
fastify.get('/api/hello', async (request, reply) => {
  return { message: 'Hello from Fastify!' }
})

// Start server
fastify.listen({ port: 5201 }, (err, address) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  console.log(`🚀 Fastify server listening at ${address}`)
})