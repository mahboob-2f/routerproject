import Navbar from "./components/Navbar"
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from "./pages/login"
import Signup from "./pages/signup"
import NotFound from "./pages/NotFound"
import Dashboard from "./pages/Dashboard"


function App() {
 
  return (
    <div className="w-full">
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

    </div>
  )
}

export default App