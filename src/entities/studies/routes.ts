import express from "express"
import * as Controller from "./controller"
import { auth } from "../../middlewares/auth"

const studiesRouter = express.Router()

studiesRouter.post("/", auth, Controller.postStudies)
studiesRouter.get("/", Controller.getStudies)

export default studiesRouter
