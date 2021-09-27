import { Request, Response } from "express"
import connection from "../../connection"
import { getTokenData } from "../../services/authenticator"
import { userTableName } from "../../types"

export async function getUserById(
    req: Request,
    res: Response
): Promise<void> {
    try {

        const token: string = req.headers.authorization!

        if (!token) {
            throw new Error("É necessário um token");
        }

        const tokenData = getTokenData(token)

        if (!tokenData) {
            throw new Error("Credencial Inválida");
        }

        const [user] = await connection(userTableName)
        .where({id: req.params.id})

        if (!user) {
            throw new Error("Usuário não encontrado");
            
        }

        const {id, name, email} = user

        res.status(200).send({
            id,
            name,
            email
        })


    } catch (error) {
        console.log(error.message)
        res.status(500).send(error.message)
    }
}