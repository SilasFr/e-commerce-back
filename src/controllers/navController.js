import db from "../db.js";

async function Products(req, res, next) {
  try {
    const Data = await db.collection("products").find().toArray();
    res.send(Data);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}

async function getSingleProduct(req, res) {
  try {
    const { category, id } = req.params;
    if (!category || !id) {
      return res.sendStatus(404);
    }
    const productSection = await db
      .collection("products")
      .findOne({ name: category });
    if (!productSection) {
      return res.sendStatus(404);
    }

    const product = productSection.products.find((item) => {
      if (item.id === id) {
        return item;
      }
    });
    if (!product) {
      return res.sendStatus(404);
    }
    res.send(product);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}

export { Products, getSingleProduct };
