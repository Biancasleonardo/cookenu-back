import { Request, Response } from "express";
import connection from "../../connection";
import { getTokenData } from "../../services/authenticator";
import { recipeTableName } from "../../types";

export default async function getRecipeById(
    req: Request,
    res: Response
): Promise<void> {
    try {

        const token = req.headers.authorization!

        if (!token) {
            throw new Error("É necessário um token");
        }

        const tokenData = getTokenData(token)

        if (!tokenData) {
            throw new Error("Credencial Inválida");
        }

        const [recipe] = await connection(recipeTableName)
            .where({ id: req.params.id })

            if (!recipe) {
                throw new Error("Receita não encontrada");
            }

        res.send({ 
            id: recipe.id,
            title: recipe.title,
            description: recipe.description,
            createdAt: recipe.created_at
         })
    } catch (error) {
        console.log(error.message)
        res.status(500).send(error.message)
    }
}