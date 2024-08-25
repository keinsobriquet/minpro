import prisma from "@/prisma";
import { Request, Response } from "express";

export class EOController {

    async getEOData (req: Request, res: Response) {
        const EOData = await prisma.user.findMany()

        return res.status(200).send(EOData)
    }

    
}