import { Request, Response } from "express";
import connection from "../../connection";
import { getTokenData } from "../../services/authenticator";
import generateId from "../../services/idGenerator";
import { recipeTableName } from "../../types";

export default async function createRecipe(
    req: Request,
    res: Response
    ): Promise<void> {
    try {

        const token = req.headers.authorization!

        if (!token) {
            throw new Error("É necessário um token");
        }

        const {title, description} = req.body

        if (!title || !description) {
            throw new Error("É necessário preencher todos os campos");
        }

        const tokenData = getTokenData(token)

        if (!tokenData) {
            throw new Error("Credencial Inválida");
        }

        const id = generateId()

        const createdAt = new Date()

        await connection(recipeTableName)
        .insert({
            id,
            title,
            description,
            created_at: createdAt,
            author_id: tokenData.id
        })

        res.send('Receita criada com sucesso!')
        
    } catch (error) {
        console.log(error.message)
        res.status(500).send(error.message)
    }
}