import { AttendeeController } from '@/controllers/attendee.controller';
import { AuthMiddleware } from '@/middlewares/auth.middleware';
import { Router } from 'express';

export class AttendeeRouter {
  private router: Router;
  private attendeeController: AttendeeController;
  private authMiddleware: AuthMiddleware;

  constructor() {
    this.attendeeController = new AttendeeController();
    this.authMiddleware = new AuthMiddleware()
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/',this.authMiddleware.verifyToken, this.attendeeController.getAttendeeData);
    this.router.get('/details',this.authMiddleware.verifyToken, this.attendeeController.getAttendeeById);
  }

  getRouter(): Router {
    return this.router;
  }
}
