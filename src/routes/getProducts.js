import { Router } from "express";
import { getSingleProduct, Products } from "../controllers/navController.js";
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { validateToken } from "../middlewares/validateToken.js";
>>>>>>> 281a5d9d2f0abb09a18e59fef922e05bd848923f
=======

import { validateToken } from "../middlewares/validateToken.js";
>>>>>>> d3d1db1196b6b732d1d246eb66e84b5d6b67229a

const getProducts = Router();

getProducts.get("/products", validateToken, Products);

getProducts.get("/products/:category/:id", validateToken, getSingleProduct);

export default getProducts;
