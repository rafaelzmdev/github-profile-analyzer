import express from "express"
import fetchdata from "./fetch.js"

const app = express()

app.get( "/", (req, res) => {
    res.send("Server online")
})

app.get("/api/fetch", (req, res) => {
    res.send(fetchdata)
})


const port = process.env.PORT || 3000

app.listen(port, ()=> {
    console.log(`Server at http://localhost:${port}`)
})