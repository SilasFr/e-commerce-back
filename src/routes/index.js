import { Router } from "express";
import getProducts from "./getProducts.js";
import userRouter from "./userRouter.js";
import authRouter from "./authRouter.js";
import categoryRouter from "./categoryRoute.js";

const router = Router();

router.use(userRouter);
router.use(getProducts);
<<<<<<< HEAD
router.use(authRouter);
router.use(categoryRouter);
=======
router.use(authRouter)
>>>>>>> 281a5d9d2f0abb09a18e59fef922e05bd848923f

export default router;
