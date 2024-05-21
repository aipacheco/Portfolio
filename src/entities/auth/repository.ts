import { UserData } from "../../types"
import User from "./model"

export const register = async (newUser: UserData) => {
  const userFind = await User.findOne({ email: newUser.email }).exec()
  if (userFind) {
    return { error: "Email ya en uso" }
  }
  const userCreated = await User.create(newUser)
  // console.log(userCreated)
  return { data: userCreated }
}

export const login = async (email: string) => {
    const findEmail = await User.findOne({ email: email })
      .select("+password")
      .select("+role")
      .exec()
    if (!findEmail) {
      return { error: "Email no encontrado" }
    }
    return { user: findEmail }
  }
  