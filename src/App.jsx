import { useEffect, useState } from 'react'
import './App.css'
import './components/Charts'
import './components/RepoCard'
import Search from './components/SearchBar'
import Titlelogo from './components/Titlelogo'
import './components/UserCard'
import { data } from 'autoprefixer'

function App() {
  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState('');

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
    }  catch (err) {
        setError(err.message);
    }  finally {
        console.log("API Fetched sucessfuly")
        console.log(data)
        setLoading(false)
    }
  };


  const handleClick = () => {
    console.log("Search button clicked.")
    if (username) {
      fetchGithubApi(username)
    } else {
      setError("Please enter a username.")
    }
  };
  const handleInputChange = e => {
    setUsername(e.target.value);
  };

  return (
    <>
      <div className="root min-h-screen bg-white dark:bg-black text-black dark:text-white  border-black dark:border-white">
        <div className="title pt-1 mb-2 ml-2 max-w-fit">
          <Titlelogo></Titlelogo>
        </div>
        <div className="search max-w-sameastitle">
          <Search username={username} handleClick={handleClick} handleInputChange={handleInputChange}></Search>
        </div>
      </div>
    </>
  )
};

export default App
