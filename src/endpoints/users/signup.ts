import { Request, Response } from "express";
import connection from "../../connection";
import { generateToken } from "../../services/authenticator";
import { generateHash } from "../../services/hashManager";
import generateId from "../../services/idGenerator";
import { userTableName } from "../../types";

export async function signup(
    req: Request,
    res: Response
): Promise<void> {
    try {

        const { name, email, password } = req.body

        if (!name || !email || !password) {
            throw new Error("Preencha corretamente todos os campos");
        }

        const id: string = generateId()
        console.log(id)

        const cypherText: string = generateHash(password)
        console.log(cypherText)

        const token: string = generateToken({ id })

        await connection(userTableName)
            .insert({
                id,
                name,
                email,
                password: cypherText,
            })

        res.send({token})
    } catch (error) {
        console.log(error.message)
        res.status(500).send(error.message)
    }
}