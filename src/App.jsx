import { useEffect } from 'react'
import './App.css'
import './components/Charts'
import './components/RepoCard'
import Search from './components/SearchBar'
import Titlelogo from './components/Titlelogo'
import './components/UserCard'

function App() {
  useEffect(() =>
    document.documentElement.classList.add('dark')
  );
  return (
    <>
      <div className="root min-h-screen bg-white dark:bg-black text-black dark:text-white  border-black dark:border-white">
        <div className="title pt-1 mb-2 ml-2 max-w-fit">
          <Titlelogo></Titlelogo>
        </div>
        <div className="search max-w-sameastitle">
          <Search></Search>
        </div>
      </div>
    </>
  )
}

export default App
