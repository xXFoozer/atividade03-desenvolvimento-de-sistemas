import { Dev as DevPrisma } from "@prisma/client";
import { prisma } from "../prisma/client";

class DevService {
    public async register({ name, bio, techs }: { name: string, bio: string, techs: string }) {
        const dev: DevPrisma = {
            id: crypto.randomUUID(),
            name: name,
            bio: bio,
            techs: techs
        }
        await prisma.dev.create({ data: dev })
    }

    public async getAll() {
        const devs = await prisma.dev.findMany()
        return devs
    }

    public async getById(id: string) {
        const uniqueDev = await prisma.dev.findUnique({ where: { id } })
        if (uniqueDev === null) {
            throw new Error("Desenvolvedor não encontrado !!")
        }
        return uniqueDev;
    }

    public async deleteById(id: string) {
        const deleteDev = await prisma.dev.delete({ where: { id } })
        return deleteDev;
    }

    public async update({id,techs}: {id:string,techs: string}) {
        const uniqueDev = await prisma.dev.findUnique({ where: { id } })
       
        if (uniqueDev === null) {
            throw new Error("Desenvolvedor não encontrado !!")
        }



        return await prisma.dev.update({
            where: {id},
            data: {techs}
        }) ;
    }
}

export const devsService = new DevService();