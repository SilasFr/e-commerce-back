import { Router } from "express";
<<<<<<< HEAD
import userRouter from "./userRouter.js"

const router = Router()

router.use(userRouter)

export default router

=======
import createDataBase from "./createDataBase.js";
const router = Router();
router.use(createDataBase);

export default router;
>>>>>>> 4765fd8b30cba6e7910940477eab41db69ad8be4
