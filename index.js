import "./models/index.js"
import express from "express"
import "./models/index.js"
import cors from "cors"
import router from "./routes/route.js"

const app = express()
app.use(express.json())
const PORT = process.env.PORT;
app.use(cors())
app.use("/", router)
//await User.sync({force: true});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})