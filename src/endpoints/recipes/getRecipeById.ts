import { Request, Response } from "express";

export default async function getRecipeById(
    req: Request,
    res: Response
    ): Promise<void> {
    try {
        
    } catch (error) {
        console.log(error.message)
        res.status(500).send(error.message)
    }
}