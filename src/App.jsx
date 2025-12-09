import { useState } from 'react'
import './App.css'
import './components/Charts'
import './components/RepoCard'
import './components/SearchBar'
import Titlelogo from './components/Titlelogo'
import './components/UserCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="title">
        <Titlelogo></Titlelogo>
      </div>
    </>
  )
}

export default App
