import { UserData } from "../../types"

export const validateUser = (request: UserData) => {
  const { email, password } = request
  
  const isInvalidPassword = (password: string) => {
    if (password.length < 8 || password.length > 15) {
      return "La contraseña debe tener entre 8 y 15 caracteres"
    }
  }
  const isInvalidEmail = (email: string) => {
    if (!email) {
      return "Tienes que proporcionar un email"
    }
    const validEmailRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
    if (!validEmailRegex.test(email)) {
      return "Formato de email inválido."
    }
  }
  const validationErrors: {
    isInvalidPassword?: string
    isInvalidEmail?: string
  } = {
    isInvalidPassword: isInvalidPassword(password),
    isInvalidEmail: isInvalidEmail(email),
  }

  return validationErrors
}
