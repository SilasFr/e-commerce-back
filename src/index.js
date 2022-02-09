<<<<<<< HEAD
import express, { json } from "express"
import cors from 'cors'
import router from './routes/index.js'

const app = express()
app.use(cors())
app.use(json())

app.use(router)

app.listen(5000, () => {
    console.log('server barulhando na  porta 5000')
})
=======
import express, { json } from "express";
import router from "./routes/index.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(json());
app.use(router);

app.listen(5000);
>>>>>>> 4765fd8b30cba6e7910940477eab41db69ad8be4
