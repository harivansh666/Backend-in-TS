import express from "express"
import { connectDB } from "./utils/db.connect"
const app = express()

connectDB()
app.get("/", (req, res) => {
    res.send("working bro");
})

app.listen(5000, () => {
    console.log("listen on 5000");
})