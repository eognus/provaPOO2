import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class LanceService {
    constructor(){

    }

    async listLance(id?: string){
        try{
            if(id){
                const lance = await prisma.lance.findUnique({
                    where: {
                        id
                    }
                });
                return usuario;
            }else{
                const lances = await prisma.lance.findMany();
                return lances;
            }
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async createLance(user: Prisma.LanceCreateInput){
        try{
            const newlance = await prisma.lance.create({
                data: user
            });
            return newlance;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async updateLance(id: string, user: Prisma.LanceUpdateInput){
        try{
            const updatedLance = await prisma.lance.update({
                where: {
                    id
                },
                data: user
            });

            return updatedLance;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async deleteLance(id: string){
        try{
            const deletedLance = await prisma.lance.delete({
                where: {
                    id
                }
            });

            return deletedLance;
        }catch(error){
            console.log(error);
            return null;
        }
    }
}

export default new LanceService();