import express from "express"
import postRoutes from "./routes/posts.js"
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"

const app = express()

app.use(express.json())
app.use("/server/posts", postRoutes)
app.use("/server/auth", authRoutes)
app.use("/server/users", userRoutes)

app.get("/test", (req,res)=>{
    res.json("it works")
})

app.listen(8800,() => console.log("listening on port 8800"))