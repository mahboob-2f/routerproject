import React, { useState } from 'react'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'

export const LoginForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [formData,setformData] = useState({
        email:"",
        password:""
    });

    const [showPassword, setShowPassword] = useState(false);

    const changeHandler = (e)=>{
        const {name,type,value} = e.target;
        setformData (values => ({...values ,[name]:value}));
    }

    const submitHandler =(e)=>{
        e.preventDefault();
        setIsLoggedIn(true);
        toast.success("logged In",{
            position:"top-center",
            autoClose:1000
        });

        //  how we are navigating on dashboard page
        navigate("/dashboard");

    }

    return (
        <form action="" onSubmit={submitHandler}>
            <div>
                <label htmlFor="email">
                    Email Address <sup>*</sup>
                </label>
                <input type="email" id='email' name='email' placeholder='Enter Email Address'
                    value={formData.email} onChange={changeHandler}
                />
            </div>

            <div>
                <label htmlFor="pass">
                    Password<sup>*</sup>
                </label>
                <input type={showPassword ? "text":"password"}
                 id='pass' name='password' placeholder='Enter Password'
                    value={formData.password} onChange={changeHandler}
                required />
                <span onClick={()=> setShowPassword(!showPassword)}>
                    {showPassword ?  <FaRegEye />:  <FaRegEyeSlash/>}
                </span>

                <Link to="#">
                    <p>
                        Forgot Password
                    </p>
                </Link>
               
            </div>

            <div>
                <button>
                    Sign In
                </button>
            </div>
        </form>


    )
}
