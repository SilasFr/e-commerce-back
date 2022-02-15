import db from "../db.js";

export async function validateToken(req, res, next) {
  const authorization = req.headers.authorization;
  const token = authorization?.replace("Bearer ", "");

  console.log("req:", req.headers);

  if (!token) {
    res.sendStatus(401);
    return;
  }

  const session = await db.collection("sessions").findOne({ token });

  if (!session) {
    res.sendStatus(401);
    return;
  }

  const user = await db.collection("users").findOne({ _id: session.userId });

  res.locals.user = user;

  next();
}
