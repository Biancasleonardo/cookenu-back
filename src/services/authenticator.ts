import { sign } from "jsonwebtoken";
import { config } from "dotenv";

config()

const {JWT_KEY} = process.env

export const generateToken = (
    payload: authenticationData
): string => sign(
    payload,
    JWT_KEY!,
    {expiresIn: "1d"}
)