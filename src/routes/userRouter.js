import { Router } from "express";
import { createUser } from "../controllers/userController.js"
import { validateUserSchema } from "../middlewares/validateUserSchema.js"

const userRouter = Router()

userRouter.post('/users', validateUserSchema, createUser)

export default userRouter