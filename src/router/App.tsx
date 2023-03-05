import './App.css'
import { Routes, Route } from "react-router-dom"
import ErrorPage from '../pages/ErrorPage/ErrorPage'



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <p>Home</p> } />
        <Route path="about" element={ <p>About</p> } />
        <Route path="contact" element={ <p>Contact</p> } />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </div>
  )
}

export default App