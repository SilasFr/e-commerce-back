import { Router } from "express";
import { cartController, getCart } from "../controllers/cartController.js";
import { validateToken } from "../middlewares/validateToken.js";

const cartRouter = Router();

cartRouter.post("/add-to-cart", validateToken, cartController);

cartRouter.get("/get-cart", validateToken, getCart);

export default cartRouter;
