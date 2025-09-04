import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className=' flex justify-between px-4 w-10/12 mx-auto'>

      <div>
        <Link path="/">
          <img src="./logo.svg" alt="logo of this website" loading='lazy' />
        </Link>
      </div>

      <div>
        <ul className='flex gap-3'>
          <Link path="/">Home</Link>
          <Link path="/about">About</Link>
          <Link path="/contact">Contact</Link>
        </ul>
      </div>

      <div className='flex gap-4'>
          <Link to="/login" >
          <button className='cursor-pointer'>Log in</button>
        </Link>
        <Link to='/signup'>
          <button  className='cursor-pointer'>Sign up</button>
        </Link>
        <Link to='/'>
          <button  className='cursor-pointer'>Log Out</button>
        </Link>
        <Link to='/dashboard'>
          <button className='cursor-pointer'>Dashboard</button>
        </Link>

      </div>

    </div>
  )
}

export default Navbar