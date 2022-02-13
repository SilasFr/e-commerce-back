import { Router } from "express";
import { getSingleProduct, Products } from "../controllers/navController.js";

import { validateToken } from "../middlewares/validateToken.js";

const getProducts = Router();

getProducts.get("/products", validateToken, Products);

getProducts.get("/products/:category/:id", validateToken, getSingleProduct);

export default getProducts;
