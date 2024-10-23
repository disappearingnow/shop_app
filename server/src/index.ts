// Import the framework and instantiate it
import Fastify from "fastify";
import { productsRoutes, authRoutes } from "./routes/_index.js";
const server = Fastify();

const PORT = 3000;

server.register(productsRoutes);
server.register(authRoutes);

server.get("/", async function handler(request, reply) {
  return { hello: "world" };
});

server.post("/login", async function handler(request, replay) {
  console.log(request.body);
  return { route: "login" };
});

// Run the server!
try {
  await server.listen({ port: PORT });
  console.log(`Listening on port ${PORT}`);
} catch (err) {
  server.log.error(err);
  process.exit(1);
}
