import Navbar from "./components/Navbar"
import {Routes,Route, Outlet} from 'react-router-dom'
import Home from './pages/Home'
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import NotFound from "./pages/NotFound"
import Dashboard from "./pages/Dashboard"
import { useState } from "react"
import About from "./pages/About"
import { Contact } from "./pages/Contact"
import PrivateRoute from "./components/PrivateRoute"


function App() {
 
  const [isLoggedIn,setIsLoggedIn] = useState(false);

  return (
    <div className="w-full">
      <Navbar isLoggedIn={isLoggedIn } setIsLoggedIn={setIsLoggedIn}/>

      
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/signup" element={<Signup  setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path="/contact"  element ={<Contact ></Contact>}/>
        <Route path="/dashboard" element={
            <PrivateRoute isLoggedIn ={isLoggedIn}>
              <Dashboard/>
            </PrivateRoute>
          }></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

    </div>
  )
}

export default App