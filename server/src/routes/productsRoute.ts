import { FastifyInstance } from "fastify";

export async function productsRoutes(fastify: FastifyInstance, options: object) {
  fastify.get("/products", async (request, reply) => {
    return { route: "products" };
  });
}
