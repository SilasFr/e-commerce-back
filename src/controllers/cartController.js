import db from "../db.js";

export async function cartController(req, res, next) {
  try {
    const user = res.locals.user;
    const product = req.body;

    if (!user || !product) {
      console.log("user or product");
      return res.sendStatus(404);
    }
    const cart = await db.collection("carts").findOne({ userId: user._id });
    if (!cart) {
      console.log("no cart");
      return res.sendStatus(404);
    }

    await db
      .collection("carts")
      .updateOne({ _id: cart._id }, { $push: { cart: product } });
    return res.sendStatus(201);
  } catch (e) {
    res.sendStatus(500);
  }
}

export async function getCart(req, res, next) {
  try {
    const user = res.locals.user;
    if (!user) {
      return res.sendStatis(404);
    }
    const cart = await db.collection("carts").findOne({ userId: user._id });
    if (!cart) {
      return res.sendStatus(404);
    }

    res.send(cart);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}

export async function deleteCartItem(req, res, next) {
  try {
    const user = res.locals.user;
    if (!user) {
      return res.sendStatus(404);
    }

    const userCart = await db.collection("carts").findOne({ userId: user._id });
    if (!userCart) {
      return res.sendStatus(404);
    }

    await db
      .collection("carts")
      .updateOne(
        { _id: userCart._id },
        { $pull: { cart: { name: req.body.name } } }
      );
    res.sendStatus(200);
  } catch (e) {
    return res.sendStatus(500);
  }
}
