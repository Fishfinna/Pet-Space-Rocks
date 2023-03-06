import './App.scss'
import { Routes, Route } from "react-router-dom"
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import NavBar from '../components/navbar/navbar'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={ <p>Home</p> } />
        <Route path="about" element={ <p>About</p> } />
        <Route path="adopt" element={ <p>Adopt</p> } />
        <Route path="profile" element={ <p>Profile</p> } />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </div>
  )
}

export default App