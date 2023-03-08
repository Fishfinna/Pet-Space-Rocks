import { Routes, Route } from "react-router-dom"
import NavBar from '../components/Navbar/navbar'

// styles
import './App.scss'

// pages
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import Adopt from '../pages/Adopt/adopt'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={ <h1 className="text-6xl bold">PET SPACE ROCKS</h1> } />
        <Route path="about" element={ <p>About</p> } />
        <Route path="adopt" element={ <Adopt/> } />
        <Route path="profile" element={ <p>Profile</p> } />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </div>
  )
}

export default App