import { Router } from "express";
import userRouter from "./userRouter.js"
import createDataBase from "./createDataBase.js";

const router = Router()

router.use(userRouter)
router.use(createDataBase);

export default router;
