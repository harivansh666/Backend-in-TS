import express from "express"
import { connectDB } from "./utils/db.connect"
const app = express()

connectDB()

app.use(express.json()); // 👈 yeh jaruri hai
app.use(express.urlencoded({ extended: true }));

import { router } from "./routes/index.routes"

app.use('/api', router)

app.listen(5000, () => {
    console.log("listen on 5000");
})