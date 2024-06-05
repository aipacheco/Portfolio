import Work from "./model"

export const postWork = async (
    title: string,
    description: string,
    location: string,
    from: string,
    to: string
  ) => {
    const existing = await Work.findOne({ location: location }).exec()
    if (existing) {
      return { error: "Ya habías puesto ese trabajo" }
    }
    const workCreate = await Work.create({
      title: title,
      description: description,
      location: location,
      from: from,
      to: to,
    })
    return { data: workCreate }
  }
  
  export const getWorks = async () => {
    const allWorks = await Work.find().exec()
    if (!allWorks) {
      return { error: "No hay estudios" }
    }
    return { data: allWorks }
  }
  