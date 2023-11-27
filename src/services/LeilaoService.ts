import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class LeilaoService {
    constructor(){

    }

    async listLeilao(id?: string){
        try{
            if(id){
                const leilao = await prisma.leilao.findUnique({
                    where: {
                        id
                    }
                });
                return leilao;
            }else{
                const leiloes = await prisma.leilao.findMany();
                return leiloes;
            }
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async createLeilao(user: Prisma.LeilaoCreateInput){
        try{
            const newleilao = await prisma.leilao.create({
                data: user
            });
            return newleilao;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async updateLeilao(id: string, user: Prisma.LeilaoUpdateInput){
        try{
            const updatedLeilao = await prisma.leilao.update({
                where: {
                    id
                },
                data: user
            });

            return updatedLeilao;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async deleteLeilao(id: string){
        try{
            const deletedLeilao = await prisma.leilao.delete({
                where: {
                    id
                }
            });

            return deletedLeilao;
        }catch(error){
            console.log(error);
            return null;
        }
    }
}

export default new LeilaoService();