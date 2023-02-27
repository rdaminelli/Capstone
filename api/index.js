import express from "express"
import postRoutes from "./routes/posts.js"
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
//import { db } from "./db.js"
import mysql from "mysql"
import cookieParser from "cookie-parser"

const app = express()

const database = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"blog"
})

app.get('/', (req, res) => {
    res.json('hello, this is the backend')
})

app.get('/users', (req, res) => {
    const q = "SELECT * FROM users"
    database.query(q,(err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})


app.use(express.json())
app.use(cookieParser())
app.use("/api/posts", postRoutes)
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)



app.listen(8800,() => console.log("listening on port 8800"))