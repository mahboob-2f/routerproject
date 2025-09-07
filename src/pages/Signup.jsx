import React from 'react'
import { Template } from '../components/Template'
 

function Signup({setIsLoggedIn}) {
  return (
    
    <Template 
      title="Join the millions learning to code with StudyNotion for free"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      formtype="signup"
      image="./signup.png"
      setIsLoggedIn={setIsLoggedIn}

    />
  )
}

export default Signup