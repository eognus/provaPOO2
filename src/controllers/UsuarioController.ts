import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import UsuarioService from "../services/UsuarioService";

class UsuarioController{

    constructor(){}

    async createUsuario(req: Request, res: Response){
        const dados: Prisma.UsuarioCreateInput = req.body;
        
        if(dados.email !== "" && dados.name !== ""){
            const newusuario = await UsuarioService.createUsuario(dados)
            res.status(200).json({
                status: 'OK',
                newusuario: newusuario
            });
        }else{
            res.status(400).json({
                status: 'erro',
                message: 'Insira os dados da requisição'
            })
        }

    }

    async listUsuarios(req: Request, res: Response){
        const usuarios = UsuarioService.listUsuarios();

        res.status(200).json({
            status: 'Ok',
            usuarios: usuarios
        })
    }

    async updateUsuarios(req: Request, res: Response){
        res.send('Atualiza usuarios');
    }

    async deleteUsuarios(req: Request, res: Response){
        res.send('Remove usuario');
    }
}

export default new UsuarioController;