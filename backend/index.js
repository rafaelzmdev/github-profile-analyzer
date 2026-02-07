import express, { json } from "express"
import jwt from "jsonwebtoken";
const app = express()
app.use(express.json())
const graphData = [1]
import cors from "cors";
app.use(cors({
  origin: [
    "https://ghanalyzer.netlify.app/",
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

const jwt1 = createAppJWT();

function createAppJWT() {
  const payload = {
    iat: Math.floor(Date.now() / 1000) - 60,
    exp: Math.floor(Date.now() / 1000) + 600,
    iss: process.env.GITHUB_APP_ID,
  };

  return jwt1.sign(payload, process.env.GITHUB_PRIVATE_KEY, {
    algorithm: "RS256",
  });
}

const res = await fetch(
  `https://api.github.com/app/installations/${installationId}/access_tokens`,
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${jwt1}`,
      Accept: "application/vnd.github+json",
    },
  }
);
const { token } = await res.json();
console.log(token) // remove before final deploy
//token = auth for graphql



// so here's where we'll put the graphQL fetch and start assigning values. great.




app.get("/api/fetch", (req, res) => {
    res.status(200).json({ data: graphData });
    console.log("User data sent to frontend");
});

const port = process.env.PORT || 3000

app.listen(port, ()=> {
    console.log(`Server at http://localhost:${port}`)
})