import { EOController } from '@/controllers/eo.controller';
import { Router } from 'express';

export class EORouter {
  private router: Router;
  private eoController: EOController;

  constructor() {
    this.eoController = new EOController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/', this.eoController.getEOData)
  }

  getRouter(): Router {
    return this.router;
  }
}
