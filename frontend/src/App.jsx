import './App.css'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Registration from "./components/Registration"
import Login from "./components/Login"
import {Route,Routes} from "react-router-dom"
function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HeroSection/>}></Route>
        <Route path="/register" element={<Registration/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </>
  )
}

export default App
