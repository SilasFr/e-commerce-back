import { Router } from "express";
import createDataBase from "./createDataBase.js";
const router = Router();
router.use(createDataBase);

export default router;
