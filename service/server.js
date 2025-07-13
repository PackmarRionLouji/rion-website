// backend/server.js
import Fastify from 'fastify'
import cors from '@fastify/cors'
import { readdir } from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const fastify = Fastify({ logger: true })

// Register CORS
await fastify.register(cors, {
  origin: '*', // Allow all origins — change for production
})

// Auto-import all route files from routes/
const routesPath = path.join(__dirname, 'routes')
const files = await readdir(routesPath)

for (const file of files) {
  const routePath = path.join(routesPath, file)
  const routeModule = await import(routePath)
  await fastify.register(routeModule.default)
}

// Start server
fastify.listen({ port: 5201 }, (err, address) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  console.log(`🚀 Fastify server listening at ${address}`)
})