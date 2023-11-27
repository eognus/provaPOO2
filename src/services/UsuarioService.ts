import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class UsuarioService {
    constructor(){

    }

    async listUsuarios(id?: string){
        try{
            if(id){
                const usuario = await prisma.usuario.findUnique({
                    where: {
                        id
                    }
                });
                return usuario;
            }else{
                const usuarios = await prisma.usuario.findMany();
                return usuarios;
            }
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async createUsuario(usuario: Prisma.UsuarioCreateInput){
        try{
            const newusuario = await prisma.usuario.create({
                data: usuario
            });
            return newusuario;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async updateUsuario(id: string, user: Prisma.UserUpdateInput){
        try{
            const updatedUsuario = await prisma.usuario.update({
                where: {
                    id
                },
                data: user
            });

            return updatedUsuario;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async deleteUsuario(id: string){
        try{
            const deletedUsuario = await prisma.usuario.delete({
                where: {
                    id
                }
            });

            return deletedUsuario;
        }catch(error){
            console.log(error);
            return null;
        }
    }
}

export default new UsuarioService();