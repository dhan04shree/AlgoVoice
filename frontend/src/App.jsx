import './App.css'
import {Route,Routes} from "react-router-dom"
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Registration from "./components/Registration"
import Login from "./components/Login"
import VoiceEntryForm from './pages/VoiceEntryForm'
import ShowEntry from './pages/ShowEntry'
import PrivateRoute from './components/PrivateRoute'
import Homepage from './pages/Homepage'
function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route
            path="/newentry"
            element={
              <PrivateRoute>
                <VoiceEntryForm/>
              </PrivateRoute>
            }
          />
        <Route path="/showentry" element={
          <PrivateRoute>
            <ShowEntry/>
          </PrivateRoute>
          }></Route>
        <Route path="/register" element={<Registration/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </>
  )
}

export default App
