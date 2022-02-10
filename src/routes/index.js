import { Router } from "express";
import getProducts from "./getProducts.js";
import userRouter from "./userRouter.js";

const router = Router();

router.use(userRouter);
router.use(getProducts);

export default router;
