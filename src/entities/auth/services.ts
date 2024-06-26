import * as Repository from "./repository"
import bcrypt from "bcrypt"
import Jwt from "jsonwebtoken"
import { validateUser } from "./utils"
import { UserData } from "../../types"

export const register = async (body: UserData) => {
  const userErrors = validateUser(body)
  if (
    userErrors.isInvalidPassword ||
    userErrors.isInvalidEmail
  ) {
    return { error: "Datos de registro inválidos", details: userErrors }
  }
  const { email, password } = body
  const passEncript: string = bcrypt.hashSync(password, 12)
  const newUser = {
    email,
    password: passEncript,
  }
  const { data, error } = await Repository.register(newUser)
  if (error) {
    return { error }
  }
  return { data }
}

export const login = async (body: UserData) => {
  const { email, password } = body
  const { user, error } = await Repository.login(email)
  if (error) {
    return { error: error }
  }
  if (user) {
    const hashedPassword = user.password
    if (typeof hashedPassword === "string") {
      const isValidPassword = bcrypt.compareSync(password, hashedPassword)
      if (isValidPassword) {
        const token = Jwt.sign(
          {
            userId: user._id,
            role: user.role
          },
          process.env.JWT_SECRET as string,
          {
            expiresIn: "730h",
          }
        )
        return { token: token }
      } else {
        return { error: "Contraseña incorrecta" }
      }
    }
  }
}