import bcrypt from "bcrypt";
import db from "../db.js";

export async function createUser(req, res) {
  try {
    const user = req.body;
    const passwordHash = bcrypt.hashSync(user.password, 10);

    const user = await db
      .collection("users")
      .insertOne({ ...user, password: passwordHash });
    await db.collection("cart").insertOne({ userId: user._id, cart: [] });

    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}
