import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

export class AuthMiddleware {
  verifyToken(req: Request, res: Response, next: NextFunction) {
    try {
      let token = req.headers.authorization?.replace('Bearer ', '');
      if (!token) throw 'Token empty';

      const user = verify(token, process.env.SECRET_KEY!);
      req.user = user as User;

      next()
    } catch (error) {
      res.status(400).send({
        status: 'error',
        msg: error,
      });
    }
  }

  checkEventorg(req: Request, res: Response, next: NextFunction) {
    try {
      if (req.user.role !== 'eventorg') throw 'You Are Not an Event Organizer!'

      next()
    } catch (error) {
      console.log(error);
      
      res.status(400).send({
        status: 'error',
        msg: error
      })
    }
  }
}
