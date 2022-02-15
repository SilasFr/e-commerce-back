import bcrypt from "bcrypt";
import db from "../db.js";

export async function createUser(req, res) {
  try {
    const user = req.body;
    const passwordHash = bcrypt.hashSync(user.password, 10);

    const { insertedId } = await db
      .collection("users")
      .insertOne({ ...user, password: passwordHash });
    await db.collection("carts").insertOne({ userId: insertedId, cart: [] });

    res.sendStatus(201);
  } catch (error) {
    return res.sendStatus(500);
  }
}
