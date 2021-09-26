import { Request, Response } from "express"
import connection from "../../connection"
import { getTokenData } from "../../services/authenticator"
import { userTableName } from "../../types"

export async function getProfile(
    req: Request,
    res: Response
): Promise<void> {
    try {

        const token: string = req.headers.authorization!

        const tokenData = getTokenData(token)
        console.log(tokenData)

        const [user] = await connection(userTableName)
        .where({id: tokenData.id})

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