import { ProjectData } from "../../types"

export const postProject = async (body: ProjectData) => {
  const {
    name,
    description,
    image,
    technologies,
    level,
    github,
    highlitedCode,
    comment,
    date
  } = body
}
