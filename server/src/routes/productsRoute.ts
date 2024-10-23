import { FastifyInstance } from "fastify";
import { fetchProducts } from "../api/_index.js";

export async function productsRoutes(
  fastify: FastifyInstance,
  options: object
) {
  fastify.get("/products", async (request, reply) => {
    const products = await fetchProducts();
    return { products };
  });
}
