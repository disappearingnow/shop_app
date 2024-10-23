import { FastifyInstance } from "fastify";
import { fetchUsers } from "../api/_index.js";

export async function authRoutes(
  fastify: FastifyInstance,
  options: object
) {
  fastify.get("/users", async (request, reply) => {
    const users = await fetchUsers();
    return { users };
  });
}
