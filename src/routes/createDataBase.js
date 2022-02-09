import { Router } from "express";
import db from "../db.js";

const createDataBase = Router();

createDataBase.get("/view-db", async (req, res) => {
  try {
    const Data = await db.collection("products").find().toArray();
    res.send(Data);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

export default createDataBase;
