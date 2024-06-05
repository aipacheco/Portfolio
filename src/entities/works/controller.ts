import { Request, Response } from "express"
import * as Services from "./services"

export const postWork = async (request: Request, response: Response) => {
  const { body } = request
  try {
    const { data, error } = await Services.postWork(body)
    if (error) {
      return response.status(400).json({
        success: false,
        message: error,
      })
    }
    return response.status(201).json({
      success: true,
      data,
      message: "Trabajo introducido correctamente",
    })
  } catch (error) {
    return response.status(500).json({
      success: false,
      message: "Error interno del servidor",
      details: error instanceof Error ? error.message : error,
    })
  }
}

export const getWorks = async (request: Request, response: Response) => {
  try {
    const { data, error } = await Services.getWorks()
    if (error) {
      return response.status(400).json({
        success: false,
        message: error,
      })
    }
    return response.status(201).json({
      success: true,
      data,
      message: "Estudios",
    })
  } catch (error) {
    return response.status(500).json({
      success: false,
      message: "Error interno del servidor",
      details: error instanceof Error ? error.message : error,
    })
  }
}
