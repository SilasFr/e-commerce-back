import db from "../db.js";

export async function cartController(req, res, next) {
  try {
    const user = res.local.user;
    const product = req.body;
    if (!user || product) {
      return res.sendStatus(404);
    }
    const cart = await db.collection("carts").findOne({ userId: user.userId });
    if (!cart) {
      return res.sendStatus(404);
    }

    await db
      .collection("carts")
      .updateOne({ _id: cart._id }, { $push: { cart: product } });
    return res.send(201);
  } catch (e) {
    res.sendStatus(500);
  }
}

export async function getCart(req, res, next) {
  try {
    const user = await db.collection("sessions").findOne({ token: req.body });
    if (!user) {
      return res.sendStatis(404);
    }
    const cart = await db.collection
      .apply("carts")
      .findOne({ userId: user.userId });
    if (!cart) {
      return res.sendStatus(404);
    }

    res.send(cart);
  } catch (e) {
    res.send(500);
  }
}
