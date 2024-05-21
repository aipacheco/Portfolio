import  {  Router } from "express"
import authRouter from "./entities/auth/routes"
import userRouter from "./entities/user/routes"


const router = Router()

router.use("/auth", authRouter)
router.use("/user", userRouter)

export default router