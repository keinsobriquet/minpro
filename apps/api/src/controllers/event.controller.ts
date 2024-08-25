import prisma from '@/prisma';
import { Request, Response } from 'express';

export class EventController {
  async getEvent(req: Request, res: Response) {
    const eventData = await prisma.event.findMany();

    res.status(200).send(eventData);
  }

  async getEventbyEO(req: Request, res: Response) {
    try {
      const eventData = await prisma.event.findMany({
        where: {userID: req.user.id}
      })
      return res.status(200).send({
        status: "ok",
        eventData
      })
    } catch (error) {
      return res.status(400).send({
        status: error,
      });
    }
  }

  async createEvent(req: Request, res: Response) {
    try {
      const eventData = await prisma.event.create({
        
        data: { ...req.body, userID: req.user.id },
      });
      console.log(eventData);
      return res.status(200).send(eventData);
    } catch (error) {
      return res.status(400).send({
        status: error,
      });
    }
  }
}
