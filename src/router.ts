import  {  Router } from "express"
import authRouter from "./entities/auth/routes"
import workRouter from "./entities/works/routes"
import studiesRouter from "./entities/studies/routes"


const router = Router()

router.use("/auth", authRouter)
router.use("/work", workRouter)
router.use("/studies", studiesRouter)


export default router