import prisma from "@/prisma";
import { Request, Response } from "express";

export class ReviewController {
    async createReview(req: Request, res: Response) {
        try {
           const reviewData = await prisma.review.create({
            data: {...req.body, userID: req.user.id, eventID: req.body.eventID}
           })

            return res.status(200).send(reviewData)
        } catch (error) {
            return res.status(400).send({
                status: error
            })
        }
    }
}