import { Router } from "express";
import { getSingleProduct, Products } from "../controllers/navController.js";

const getProducts = Router();

getProducts.get("/products", Products);

getProducts.get("/products/:category/:id", getSingleProduct);

export default getProducts;
