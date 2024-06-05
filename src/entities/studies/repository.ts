import Studies from "./model"

// export const isOwner = async()

export const postStudies = async (
  title: string,
  description: string,
  location: string,
  from: string,
  to: string
) => {
  const existing = await Studies.findOne({ location: location }).exec()
  if (existing) {
    return { error: "Ya habías puesto esos estudios" }
  }
  const studiesCreate = await Studies.create({
    title: title,
    description: description,
    location: location,
    from: from,
    to: to,
  })
  return { data: studiesCreate }
}

export const getStudies = async () => {
  const allStudies = await Studies.find().exec()
  if (!allStudies) {
    return { error: "No hay estudios" }
  }
  return { data: allStudies }
}
