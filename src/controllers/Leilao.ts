import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import LeilaoService from "../services/LeilaoService";

class LeilaoController{

    constructor(){}

    async createLeilao(req: Request, res: Response){
        const dados: Prisma.LeilaoCreateInput = req.body;
        
        if(dados.email !== "" && dados.name !== ""){
            const newleilao = await LeilaoService.createLeilao(dados)
            res.status(200).json({
                status: 'OK',
                newleilao: newleilao
            });
        }else{
            res.status(400).json({
                status: 'erro',
                message: 'Insira os dados da requisição'
            })
        }

    }

    async listLeilao(req: Request, res: Response){
        const Leilao = LeilaoService.listLeilao();

        res.status(200).json({
            status: 'Ok',
            leilao: leilao
        })
    }

    async updateLeilao(req: Request, res: Response){
        res.send('Atualiza leilão');
    }

    async deleteLeilao(req: Request, res: Response){
        res.send('Remove Leilão');
    }
}

export default new LeilaoController;