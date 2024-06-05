import { StudiesData } from "../../types"
import * as Repository from "./repository"

export const postStudies = async (body: StudiesData) => {
  const { title, description, location, from, to } = body
  const { data, error } = await Repository.postStudies(
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

export const getStudies = async () => {
    const { data, error } = await Repository.getStudies()
      if (error) {
        return { error: error }
      }
      return { data }
}
