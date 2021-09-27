import { Request, Response } from "express";
import connection from "../../connection";
import { generateToken } from "../../services/authenticator";
import { compareHash, generateHash } from "../../services/hashManager";
import generateId from "../../services/idGenerator";
import { userTableName } from "../../types";

export async function login(
    req: Request,
    res: Response
): Promise<void> {
    try {

        const { email, password } = req.body

        if (!email || !password) {
            throw new Error("Preencha todos os campos");
        }

        const [user] = await connection(userTableName)
            .where({ email })

            if (!user) {
                throw new Error("Usuário não encontrado");
            }

            const passwordIsCorrect = compareHash(password, user.password)

            if (!passwordIsCorrect) {
                throw new Error("Credencial inválida");
            }

            const token = generateToken({id: user.id})

            res.status(200).send({token})

    } catch (error) {
        console.log(error.message)
        res.status(500).send(error.message)
    }
}