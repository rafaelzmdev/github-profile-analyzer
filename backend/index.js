import express, { json } from "express"
const app = express()
app.use(express.json())
const graphData = [1]
import cors from "cors";
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://your-frontend-domain.com",
  ],
}));

app.get( "/", (req, res) => {
    res.send("Server online");
});

app.post("/api/username", (req, res) => {
    const username = req.body.username
    console.log("Username catched successfuly:", username)
    res.json({
        received: username
    });
});

// so here's where we'll put the graphQL fetch and start assigning values. great.




app.get("/api/fetch", (req, res) => {
    res.status(200).json({ data: graphData });
    console.log("User data sent to frontend");
});

const port = process.env.PORT || 3000

app.listen(port, ()=> {
    console.log(`Server at http://localhost:${port}`)
})