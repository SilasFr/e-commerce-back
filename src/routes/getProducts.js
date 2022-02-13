import { Router } from "express";
import { getSingleProduct, Products } from "../controllers/navController.js";
<<<<<<< HEAD
=======
import { validateToken } from "../middlewares/validateToken.js";
>>>>>>> 281a5d9d2f0abb09a18e59fef922e05bd848923f

const getProducts = Router();

getProducts.get("/products", validateToken, Products);

getProducts.get("/products/:category/:id", validateToken, getSingleProduct);

export default getProducts;
