import { Router } from "express";
import getProducts from "./getProducts.js";
import userRouter from "./userRouter.js";
import authRouter from "./authRouter.js"

const router = Router();

router.use(userRouter);
<<<<<<< HEAD
router.use(getProducts);
=======
router.use(authRouter)
>>>>>>> 416c2a6af449781089efa8b829ce835cf80a454e

export default router;
