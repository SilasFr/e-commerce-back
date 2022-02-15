import db from "../db.js";

export async function checkout(req, res, next) {
  try {
    const user = res.locals.user;
    if (!user) return res.sendStatus(404);

    const checkouts = await db
      .collections("checkouts")
      .insertOne({ userId: user._id, info: req.body, date: Date.now() });
    if (!checkouts) return res.sendStatus(404);

    res.sendStatus(201);
  } catch (e) {
    res.sendStatus(500);
  }
}
