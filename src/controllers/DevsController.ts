import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { devsService } from "../Services/DevsService";

export async function DevsController(app: FastifyInstance) {
  app.post("/new-dev", async (request: FastifyRequest, reply: FastifyReply) => {
    const body = request.body as { name: string, bio: string, techs: string }

    try {
      await devsService.register(body)
      return reply.code(201).send();

    } catch (error: any) {
      return reply.status(409).send({ error: error.message })
    }
  });

  app.get("/show-all", async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const list = await devsService.getAll()
      return list
    } catch (error: any) {
      return reply.status(404).send({ error: "Not Found" })
    }
  });

  app.get("/find-unique/:id", async (request: FastifyRequest, reply: FastifyReply) => {
    const { id } = request.params as { id: string };

    try {
      const dev = await devsService.getById(id)
      return reply.code(200).send(dev)
    } catch (error: any) {
      return reply.code(404).send({ error: error.message })
    }

  });

  app.delete("/delete-dev/:id", async (request: FastifyRequest, reply: FastifyReply) => {
    const { id } = request.params as { id: string };
    try{
      await devsService.deleteById(id)
      return reply.code(200).send()
    }catch(error: any){
      return reply.code(404).send({error: "Not Found"})
    }

  });

  app.patch("/update-dev/:id", async (request: FastifyRequest, reply: FastifyReply) => {
    const { id } = request.params as { id: string };
    const { techs } = request.body as { techs: string };

    try {
      const dev = await devsService.update({id, techs})
      return reply.code(200).send(dev)
    } catch (error: any) {
      return reply.code(404).send({ error: error.message })
    }

  });
}
