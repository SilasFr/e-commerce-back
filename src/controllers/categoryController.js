import db from "../db.js";

async function categoryController(req, res, next) {
  const category = req.params.name;
  if (!category) {
    return res.sendStatus(404);
  }

  const categoryProducts = await db
    .collection("products")
    .findOne({ name: category });

  if (!categoryProducts) {
    return res.sendStatus(404);
  }

  res.send(categoryProducts);
}

export default categoryController;
