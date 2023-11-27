import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import LanceService from "../services/LanceService";

class LanceController{

    constructor(){}

    async createLance(req: Request, res: Response){
        const dados: Prisma.LanceCreateInput = req.body;
        
        if(dados.email !== "" && dados.name !== ""){
            const newlance = await LanceService.createLance(dados)
            res.status(200).json({
                status: 'OK',
                newlance: newlance
            });
        }else{
            res.status(400).json({
                status: 'erro',
                message: 'Insira os dados da requisição'
            })
        }

    }

    async listLance(req: Request, res: Response){
        const Lance = LanceService.listLance();

        res.status(200).json({
            status: 'Ok',
            lance: lance
        })
    }

    async updateLance(req: Request, res: Response){
        res.send('Atualiza Lance');
    }

    async deleteLance(req: Request, res: Response){
        res.send('Remove Lance');
    }
}

export default new LanceController;