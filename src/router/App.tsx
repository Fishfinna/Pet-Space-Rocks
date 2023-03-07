import './App.scss'
import { Routes, Route } from "react-router-dom"
import NavBar from '../components/Navbar/navbar'

//pages
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import Adopt from '../pages/Adopt/adopt'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={ <p>Home</p> } />
        <Route path="about" element={ <p>About</p> } />
        <Route path="adopt" element={ <Adopt/> } />
        <Route path="profile" element={ <p>Profile</p> } />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </div>
  )
}

export default App