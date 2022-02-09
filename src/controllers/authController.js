import bcrypt from 'bcrypt'
import { v4 as uuid } from 'uuid'
import db from '../db.js'

export async function login(req, res) {
    const { email, password } = req.body;

    try {
        const user = await db.collection("users").findOne({ email })
    
        if(!user) {
            res.sendStatus(401)
            return
        }
      
        if (bcrypt.compareSync(password, user.password)) {
            const token = uuid()
    
            await db.collection("sessions").insertOne({ token, userId: user._id})
    
            res.send(token)
            return
        }
        res.sendStatus(401)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}
