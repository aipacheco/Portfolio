import express from "express"
import * as Controller from "./controller"
import { auth } from "../../middlewares/auth"


const portfolioRouter = express.Router()

portfolioRouter.post("/", auth, Controller.postProject)

export default portfolioRouter