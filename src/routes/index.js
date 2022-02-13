import { Router } from "express";
import getProducts from "./getProducts.js";
import userRouter from "./userRouter.js";
import authRouter from "./authRouter.js";

const router = Router();

router.use(userRouter);
router.use(getProducts);
router.use(authRouter);

export default router;
