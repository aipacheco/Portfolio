import { title } from "process"
import { text } from "stream/consumers"

export type TokenData = {
  userId: number
  role: string
}

declare global {
  // Express
  namespace Express {
    export interface Request {
      tokenData: TokenData
    }
  }
}

export type UserData = {
  email: string
  password: string
  role?: string
}

export type StudiesData = {
  title: string
  description: string
  location: string
  from: string
  to: string
}

export type ProjectData = {
  name: string
  description: string
  image: string
  technologies: string[]
  level: string
  github: string
  highlitedCode: string
  comment: string
  date: string
}
