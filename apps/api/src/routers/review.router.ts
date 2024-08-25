import { ReviewController } from "@/controllers/review.controller";
import { AuthMiddleware } from "@/middlewares/auth.middleware";
import { Router } from "express";

export class ReviewRouter {
    private router: Router
    private reviewController: ReviewController
    private authMiddleware: AuthMiddleware

    constructor() {
        this.authMiddleware = new AuthMiddleware()
        this.reviewController = new ReviewController()
        this.router = Router()
        this.initializeRoutes()
    }
    
    private initializeRoutes(): void{
        this.router.post('/review', this.authMiddleware.verifyToken, this.reviewController.createReview)
    }
}