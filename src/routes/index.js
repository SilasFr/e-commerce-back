import { Router } from "express";
import getProducts from "./getProducts.js";
import userRouter from "./userRouter.js";
import authRouter from "./authRouter.js";
import categoryRouter from "./categoryRoute.js";

const router = Router();

router.use(userRouter);
router.use(getProducts);
<<<<<<< HEAD
<<<<<<< HEAD
router.use(authRouter);
router.use(categoryRouter);
=======
router.use(authRouter)
>>>>>>> 281a5d9d2f0abb09a18e59fef922e05bd848923f
=======
router.use(authRouter);
router.use(categoryRouter);
>>>>>>> d3d1db1196b6b732d1d246eb66e84b5d6b67229a

export default router;
