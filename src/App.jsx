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
      <div className="root" class="min-h-screen bg-white dark:bg-black text-black dark:text-white ">
        <div className="titlensearch">
          <Titlelogo></Titlelogo>
        </div>
      </div>
    </>
  )
}

export default App
