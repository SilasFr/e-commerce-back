<<<<<<< HEAD
import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'
dotenv.config()

const mongoClient = new MongoClient("mongodb://localhost:27017");

await mongoClient.connect()

const db = mongoClient.db("mywallet")

export default db
=======
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);
await mongoClient.connect();
let db = mongoClient.db("sartoria-brasil");
export default db;
>>>>>>> 4765fd8b30cba6e7910940477eab41db69ad8be4
