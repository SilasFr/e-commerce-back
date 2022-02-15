import { Router } from "express";
import { validateToken } from "../middlewares/validateToken.js";
import {
  cartController,
  deleteCartItem,
  getCart,
} from "../controllers/cartController.js";

const cartRouter = Router();

cartRouter.post("/banana", validateToken, cartController);

cartRouter.get("/get-cart", validateToken, getCart);

cartRouter.put("/delete-cart-item", validateToken, deleteCartItem);

export default cartRouter;
