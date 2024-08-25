import { TransactionController } from '@/controllers/transaction.controller';
import { AuthMiddleware } from '@/middlewares/auth.middleware';
import { Router } from 'express';

export class TransactionRouter {
  private router: Router;
  private transactioncontroller: TransactionController;
  private authMiddleware: AuthMiddleware;

  constructor() {
    this.authMiddleware = new AuthMiddleware();
    this.transactioncontroller = new TransactionController();
    this.router = Router()
    this.initializeRoutes()
  }

  private initializeRoutes(): void {
    this.router.get('/eventpaymentdetails',this.authMiddleware.verifyToken, this.authMiddleware.checkEventorg, this.transactioncontroller.getTransactionByEventID)
    // this.router.get('/profit',this.authMiddleware.checkEventorg, this.authMiddleware.verifyToken, this.transactioncontroller.getTransactionByEOID )
    this.router.post('/payment', this.authMiddleware.verifyToken, this.transactioncontroller.createTransaction)
  }

  getRouter(): Router {
    return this.router
  }
}
