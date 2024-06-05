import { StudiesData } from "../../types"
import * as Repository from "./repository"

export const postWork = async (body: StudiesData) => {
  const { title, description, location, from, to } = body
  const { data, error } = await Repository.postWork(
    title,
    description,
    location,
    from,
    to
  )
  if (error) {
    return { error: error }
  }
  return { data }
}

export const getWorks = async () => {
    const { data, error } = await Repository.getWorks()
      if (error) {
        return { error: error }
      }
      return { data }
}
