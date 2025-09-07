import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { toast } from 'react-toastify'

function Navbar({ isLoggedIn, setIsLoggedIn }) {

  // const clickHandler = ()=>{
  //  { setIsLoggedIn(true);}
  // }

  return (
    <div className=' flex justify-between   w-9/12 mx-auto pt-6 text-[#e3dfdf] font-serif'>

      <div>
        <Link to="/">
          <img src="./logo.svg" alt="logo of this website" loading='lazy' className='w-[160px] h-[32px]' />
        </Link>
      </div>

      <div>
        <ul className='flex gap-3 gap-x-6'>
          <Link to="/" className='text-[20px] capitalize   text-[#e3dfdf]  '>Home</Link>
          <Link to="/about" className='text-[20px] capitalize  '>About</Link>
          <Link to="/contact" className='text-[20px] capitalize   '>Contact</Link>
        </ul>
      </div>

      <div className='flex gap-4 text-white '>
        {!isLoggedIn &&
          <Link to="/login" >
            <button
              className=' border-1 border-gray-600 rounded-lg  px-4 py-[6px] text-[#AFB2BF] font-[400] text-lg 
                bg-[#161D29] hover:text-gray-200 cursor-pointer  transition-all duration-200 font-serif
              '>Log in</button>
          </Link>

        }
        {
          !isLoggedIn &&
          <Link to='/signup'>
            <button className=' border-1 border-gray-600 rounded-lg  px-4 py-[6px] text-[#AFB2BF] font-[400] text-lg 
                bg-[#161D29] hover:text-gray-200 cursor-pointer  transition-all duration-200 font-serif
              '>Sign up</button>
          </Link>
        }

        {isLoggedIn &&
          <Link to='/'>
            <button onClick={() => {
              setIsLoggedIn(false);
              toast.success("Logout successfull", {
                position: "top-center",
                autoClose: 1500
              });
            }} className=' border-1 border-gray-600 rounded-lg  px-4 py-[6px] text-[#AFB2BF] font-[400] text-lg 
                bg-[#161D29] hover:text-gray-200 cursor-pointer  transition-all duration-200 font-serif
              '>Log Out</button>
          </Link>
        }

        {isLoggedIn &&
          <Link to='/dashboard'>
            <button className=' border-1 border-gray-600 rounded-lg  px-4 py-[6px] text-[#AFB2BF] font-[400] text-lg 
                bg-[#161D29] hover:text-gray-200 cursor-pointer  transition-all duration-200 font-serif
              '>Dashboard</button>
          </Link>

        }

      </div>


    </div>
  )
}

export default Navbar