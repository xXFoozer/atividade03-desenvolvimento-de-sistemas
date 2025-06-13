import cors from '@fastify/cors';
import fastify from 'fastify';
import { DevsController  } from './controllers/DevsController'; 

const app = fastify();

app.register(cors, {
    origin: true,
    methods: ['GET', 'POST', 'PUT', "PATCH", 'DELETE']
}) // ADICIONAR O CORS

app.register(DevsController); // ADICIONA O CONTROLLER

app.listen({ port: 3333 }).then(() => {
    console.log("Backend rodando na porta 3333!!!")
})