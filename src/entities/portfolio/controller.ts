import { Request, Response } from "express"
import * as Services from "./services"

export const postProject = async (request: Request, response: Response) => {
  const { body } = request
  try {
    const { data, error } = await Services.postProject(body)
    if (error) {
      return response.status(400).json({
        success: false,
        message: error,
      })
    }
    return response.status(201).json({
      success: true,
      data,
      message: "Proyecto introducido correctamente",
    })
  } catch (error) {
    return response.status(500).json({
      success: false,
      message: "Error interno del servidor",
      details: error instanceof Error ? error.message : error,
    })
  }
}
