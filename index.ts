import { CorsOptions } from "cors"
import express from "express"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()

const corsConfig: CorsOptions = {
  origin: "*",
  methods: ["GET", "POST"],
}

const app = express()

app.use(cors(corsConfig))

app.get("/", (req, res) => {
    res.send({success: true})
})

app.listen(process.env.DEV_PORT, () => {
    console.log(`Rig API\nListening on port ${process.env.DEV_PORT}...`)
})