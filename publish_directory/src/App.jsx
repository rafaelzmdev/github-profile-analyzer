import { useEffect, useState } from 'react'
import './App.css'
import Charts from './components/Charts'
import Search from './components/SearchBar'
import Titlelogo from './components/Titlelogo'
import Card from './components/UserCard'

function App() {
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState('');
  const [placeholder, setPlaceholder] = useState('Insert username here');
  const [graphdata, setGraphData] = useState(null)
  

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const fetchGithubApi = async (username) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) throw new Error('Failed to fetch API');
      const data = await response.json();
      setInfo(data);
      console.log(data)
    }  catch (error) {
        setError(error.message);
    }  finally {
        console.log("API Fetched")
        setLoading(false)
    }
  };
  
  const fetchGraphData = async (username) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("https://graphql-gha-api.onrender.com/api/username", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username })
      });

      if (!res.ok) throw new Error("Backend fetch failed");

      const data = await res.json();
      setGraphData(data);

      console.log(data);
    } catch (error) {
      setError(error.message);
    } finally {
      console.log("GraphQL backend fetched");
      setLoading(false);
    }
  };


  useEffect(() => {
    if (loading) {
      setPlaceholder("Fetching API")
    }
    else if (error) {
      setPlaceholder("API fetch error; try again")
    }
    else {
      setPlaceholder("Insert username here")
    }
  })

  const handleClick = () => {
    console.log("Search button clicked")
    if (username) {
      fetchGithubApi(username)
      fetchGraphData(username)
    } else {
      setError("nousername")
    }
  };
  const handleInputChange = e => {
    setUsername(e.target.value);
  };
  const removeInput = () => {
    setUsername("")
  };

  return (
    <>
      <div className="root min-h-screen flex text-black dark:text-white  border-black dark:border-white">
        <div>
            <div className="title pt-1 mb-2 ml-2 max-w-fit">
              <Titlelogo></Titlelogo>
            </div>
            <div className="search max-w-sameastitle">
               <Search username={username} handleClick={handleClick} handleInputChange={handleInputChange} removeInput={removeInput} placeholder={placeholder}></Search>
            </div>
            <div className="cardcontainer flex w-29.5 pt-5">
              <Card info={info}></Card>
            </div>
        </div>
        <div className="chartcontainer gap-2 h-[100vh] min-w-max ml-8 mt-1">
          <Charts info={info} graphdata={graphdata}></Charts>
        </div>
      </div>
    </>
  )
};

export default App
