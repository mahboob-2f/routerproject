import React from 'react'
import { Template } from '../components/Template'

function Login({setIsLoggedIn}) {
  return (

    <Template  
      title="Welcome Back"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      formtype="login"
      image="./login.png"
      setIsLoggedIn={setIsLoggedIn}
    />
    
  )
}

export default Login