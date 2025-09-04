import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import {toast} from 'react-toastify'

function Navbar({ isLoggedIn , setIsLoggedIn }) {

  const clickHandler = ()=>{
   { setIsLoggedIn(true);}
  }

  return (
    <div className=' flex justify-between px-4 w-10/12 mx-auto pt-4'>

      <div>
        <Link to="/">
          <img src="./logo.svg" alt="logo of this website" loading='lazy' className='w-[160px] h-[32px]' />
        </Link>
      </div>

      <div>
        <ul className='flex gap-3 gap-x-6'>
          <Link to="/" className='text-[16px] capitalize font-medium text-white '>Home</Link>
          <Link to="/about" className='text-[16px] capitalize font-medium text-white '>About</Link>
          <Link to="/contact" className='text-[16px] capitalize font-medium text-white '>Contact</Link>
        </ul>
      </div>

      <div className='flex gap-4 text-white '>
        { !isLoggedIn &&
          <Link to="/login" >
          <button  
           className='cursor-pointe rtext-[16px] capitalize font-medium text-white '>Log in</button>
        </Link>
        
        }
        {
          !isLoggedIn &&
          <Link to='/signup'>
          <button className='cursor-pointer text-[16px] capitalize font-medium text-white '>Sign up</button>
        </Link>
        }
        
        { isLoggedIn &&
          <Link to='/'>
          <button onClick={()=>{
            setIsLoggedIn(false);
            toast.success("Logout successfull",{
              position:"top-center",
              autoClose:1500
            });
          }} className='cursor-pointer text-[16px] capitalize font-medium text-white '>Log Out</button>
        </Link>
        }
        
        { isLoggedIn &&
            <Link to='/dashboard'>
          <button className='cursor-pointer text-[16px] capitalize font-medium text-white '>Dashboard</button>
        </Link>

        }
      
      </div>

          
    </div>
  )
}

export default Navbar