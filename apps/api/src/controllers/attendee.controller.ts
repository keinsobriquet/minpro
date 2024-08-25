import { Request, Response } from 'express';
import prisma from '@/prisma';

export class AttendeeController {
  async getAttendeeData(req: Request, res: Response) {
    const attendeeData = await prisma.user.findMany();

    return res.status(200).send(attendeeData);
  }

  async getAttendeeById(req: Request, res: Response) {
    try {
      console.log(req.user.id);
      
      const user = await prisma.user.findUnique({
        where: { id: req.user.id },
      });
      res.status(200).send({
        status: 'ok',
        user,
      });
    } catch (err) {
      console.log(err);
      
      res.status(400).send({
        status: 'error',
        msg: err,
      });
    }
  }

  async deleteAttendeeData(req: Request, res: Response) {
    const { id } = req.params;

    const data = await prisma.user.delete({
      where: { id: req.body.id },
    });

    if (!data) {
      return res.status(404);
    }

    return res.status(200).send(data);
  }
}
