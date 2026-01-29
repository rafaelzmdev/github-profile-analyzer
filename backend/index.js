import express from "express"
const app = express()
const graphData = [1, 2, 3, 4]

app.get( "/", (req, res) => {
    res.send("Server online");
});

app.get("/api/fetch", (req, res) => {
    res.status(200).json({ data: graphData });
    console.log("User data sent to frontend");
});

app.get("/api/username", (req, res) => {
    const username = req.query.username
    console.log("Username catched successfuly", username)
    res.json({
        received: username
    });
});


const port = process.env.PORT || 3000

app.listen(port, ()=> {
    console.log(`Server at http://localhost:${port}`)
})