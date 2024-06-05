import express from "express"
import * as Controller from "./controller"
import { auth } from "../../middlewares/auth"


const workRouter = express.Router()

workRouter.post("/", auth, Controller.postWork)
workRouter.get("/", Controller.getWorks)

export default workRouter