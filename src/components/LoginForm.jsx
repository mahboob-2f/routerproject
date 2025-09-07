import React, { useState } from 'react'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'

export const LoginForm = ({ setIsLoggedIn }) => {

    const navigate = useNavigate();

    const [formData, setformData] = useState({
        email: "",
        password: ""
    });

    const [showPassword, setShowPassword] = useState(false);

    const changeHandler = (e) => {
        const { name, type, value } = e.target;
        setformData(values => ({ ...values, [name]: value }));
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setIsLoggedIn(true);
        toast.success("logged In", {
            position: "top-center",
            autoClose: 1000
        });

        //  how we are navigating on dashboard page
        navigate("/dashboard");

    }

    return (
        <form action="" onSubmit={submitHandler} className='space-y-2'>
            <div className='flex flex-col gap-y-1'>
                <label htmlFor="email" className='text-[16px] text-[#F1F2FF]'>
                    Email Address <sup className='text-[red] '>*</sup>
                </label>

                <input type="email" id='email' name='email' placeholder='Enter email address' required
                    value={formData.email} onChange={changeHandler}
                    className='outline-0  text-[#F1F2FF]  bg-[#3a3a3aa3] px-2 py-2 rounded-md  border-b-1 border-b-gray-300'
                />
            </div>

            <div className='flex flex-col gap-y-1 relative  '>
                <label htmlFor="pass" className='text-[16px] text-[#F1F2FF]'>
                    Password<sup className='text-[red] '>*</sup>
                </label>
                <div className='flex flex-col gap-y-1 relative'>
                    <input type={showPassword ? "text" : "password"}
                        id='pass' name='password' placeholder='Enter Password'
                        value={formData.password} onChange={changeHandler}
                        required
                        className='outline-0  relative text-[#F1F2FF]  bg-[#3a3a3aa3] px-2 py-2 rounded-md  border-b-1 border-b-gray-300' />
                    <span onClick={() => setShowPassword(!showPassword)} className='absolute right-2 top-2 text-2xl text-[grey] '>
                        {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                    </span>
                </div>


                <Link to="#">
                    <p className='text-[13px] font-semibold text-[#47A5C5] absolute right-0'>
                        Forgot Password
                    </p>
                </Link>

            </div>

            <div className='flex justify-center items-center bg-[#FFD60A] mt-12 rounded-lg text-black font-semibold
                
            ' >
                <button className='w-full py-2  '>
                    Sign In
                </button>
            </div>
        </form>


    )
}
