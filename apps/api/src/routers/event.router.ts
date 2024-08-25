import { EventController } from '@/controllers/event.controller';
import { AuthMiddleware } from '@/middlewares/auth.middleware';
import { Router } from 'express';

export class EventRouter {
  private router: Router;
  private eventController: EventController;
  private authMiddleware: AuthMiddleware

  constructor() {
    this.eventController = new EventController();
    this.authMiddleware = new AuthMiddleware()
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/', this.eventController.getEvent)
    this.router.get('/myevents', this.authMiddleware.verifyToken, this.authMiddleware.checkEventorg, this.eventController.getEventbyEO)
    this.router.post('/', this.authMiddleware.verifyToken, this.authMiddleware.checkEventorg, this.eventController.createEvent);
  }

  getRouter(): Router {
    return this.router;
  }
}
