import { compareSync, genSaltSync, hashSync } from 'bcryptjs'
import { config } from 'dotenv'

config()

// Gera o hash
export const generateHash = (
    plainText: string
): string => {
    const rounds: number = Number(process.env.BCRYPT_COST)
    const salt = genSaltSync(rounds)
    
    return hashSync(plainText, salt)
}

// compara o hash, retorna um booleano
export const compareHash = (
    plainText: string,
    cypherText: string
): boolean => compareSync(plainText, cypherText)