import { AuthController } from '@/controllers/auth.controller';
import { AuthMiddleware } from '@/middlewares/auth.middleware';
import { Router } from 'express';

export class AuthRouter {
  private router: Router;
  private authController: AuthController;
  private authMiddelware: AuthMiddleware

  constructor() {
    this.authController = new AuthController();
    this.authMiddelware = new AuthMiddleware()
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post('/register', this.authController.createAttendeeData);
    this.router.post('/login',this.authController.loginAttendee)
    this.router.post('/eoregister', this.authController.createEOData)
    this.router.post('/eologin', this.authController.loginEO)
    this.router.patch('/verification', this.authMiddelware.verifyToken, this.authController.verifyUser)
    
  }

  getRouter(): Router {
    return this.router;
  }
}
