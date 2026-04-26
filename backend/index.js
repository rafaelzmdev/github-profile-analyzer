import express, { json } from "express"
import jwt from "jsonwebtoken";
import cors from "cors";
const app = express()
app.use(express.json())
app.use(cors());

app.get( "/", (req, res) => {
    res.send("Server online");
});

function createAppJWT() {
  const payload = {
    iat: Math.floor(Date.now() / 1000) - 60,
    exp: Math.floor(Date.now() / 1000) + 600,
    iss: process.env.GITHUB_APP_ID,
  };
  const privateKey = process.env.GITHUB_PRIVATE_KEY.replace(/\\n/g, "\n");

  return jwt.sign(payload, privateKey, {
    algorithm: "RS256",
  });
}

let cachedToken = null;
let tokenExpiresAt = 0;
const INSTALLATION_ID = process.env.INSTALLATION_ID;

async function getInstallationToken(INSTALLATION_ID) {
  if (cachedToken && Date.now() < tokenExpiresAt) {
    return cachedToken;
  }

  const appJwt = createAppJWT();

  const res = await fetch(
    `https://api.github.com/app/installations/${INSTALLATION_ID}/access_tokens`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${appJwt}`,
        Accept: "application/vnd.github+json",
      },
    }
  );

  if (!res.ok) {
    throw new Error(`GitHub auth failed: ${res.status}`);
  }

  const data = await res.json();

  cachedToken = data.token;
  tokenExpiresAt = new Date(data.expires_at).getTime();

  return cachedToken;
}

//token = auth for graphql
// call getInstallationToken(cachedToken) only mid-fetch!

app.post("/api/username", async (req, res) => {
    const username = req.body.username
    console.log("Username catched successfuly:", username)
    if (!username) {
      return res.sendStatus(400);
    }

    const cachedToken = await getInstallationToken(INSTALLATION_ID)
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${cachedToken}`
      },
      body: JSON.stringify({
        query: `
            query UserAnalytics($login: String!) {
              user(login: $login) {
                login
                name

                repositories(
                  ownerAffiliations: OWNER
                  isFork: false
                  first: 100
                ) {
                  totalCount
                  nodes {
                    stargazerCount
                    forkCount
                    languages(first: 10) {
                      edges {
                        size
                        node { name }
                      }
                    }
                  }
                }
                contributionsCollection {
                  contributionCalendar {
                    weeks {
                      contributionDays {
                        date
                        contributionCount
                      }
                    }
                  }
                }
              }
            }
          `,
        variables: {
         login: username
        }
      }),
    })
    const data = await response.json()
    const weeks =
      data.data.user.contributionsCollection.contributionCalendar.weeks;
    const days = weeks.flatMap(week => week.contributionDays);
    const monthlyTotals = {};
    days.forEach(day => { const monthKey = day.date.slice(0, 7);

      if (!monthlyTotals[monthKey])
        { monthlyTotals[monthKey] = 0; } 

    monthlyTotals[monthKey] += day.contributionCount;

    });
    const sorted = Object.entries(monthlyTotals) .sort(([a], [b]) => new Date(a) - new Date(b));
    console.log(sorted)

    const readable = JSON.stringify(data.data.user.repositories, null, 2)
    console.log(readable)

    const contributions = sorted.map(([month, count]) => ({
      month,
      contributions: count
    }));

    const languageTotals = {};

    data.data.user.repositories.nodes.forEach(repo => {
      repo.languages.edges.forEach(lang => {
        const name = lang.node.name;
        const size = lang.size;

        if (!languageTotals[name]) {
          languageTotals[name] = 0;
        }

        languageTotals[name] += size;
      });
    });

    const languages = Object.entries(languageTotals).map(([name, value]) => ({
      name,
      value
    }));

    const repos = data.data.user.repositories.nodes;

    const stars = repos.map(repo => ({
      name: repo.name,
      stars: repo.stargazerCount
    }));

    const topRepos = stars
      .sort((a, b) => b.stars - a.stars)
      .slice(0, 5);
    const graphData = {
      contributions,
      languages,
      repos,
      stars,
      topRepos
    };
    res.json(graphData);
  });


// so here's where we'll put the graphQL fetch and start assigning values. great.


const port = process.env.PORT || 3000

app.listen(port, ()=> {
    console.log(`Server at http://localhost:${port}`)
})