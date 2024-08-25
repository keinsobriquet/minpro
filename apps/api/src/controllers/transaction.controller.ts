import prisma from '@/prisma';
import { Request, Response } from 'express';

export class TransactionController {
  async createTransaction(req: Request, res: Response) {
    try {
      const trans = await prisma.transaction.create({
        data: { ...req.body, userID: req.user.id, eventID: req.body.eventID },
      });
      console.log(trans);

      return res.status(200).send(trans);
    } catch (error) {
      return res.status(200).send({
        status: 'error',
        msg: error,
      });
    }
  }

  async getTransactionByEventID(req: Request, res: Response) {
    try {  
      const trans = await prisma.transaction.findMany({
        where: {
          eventID: req.body.eventID,
        },
      });
      console.log(trans);

      return res.status(200).send(trans);
    } catch (error) {
        console.log(error);
        
      return res.status(200).send({
        status: 'error',
        msg: error,
      });
    }
  }
}
