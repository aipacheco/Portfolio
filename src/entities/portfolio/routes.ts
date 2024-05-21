import express from "express"
import * as Controller from "./controller"
import { auth } from "../../middlewares/auth"
import { isAdmin } from "../../middlewares/isAdmin"

const portfolioRouter = express.Router()



export default portfolioRouter