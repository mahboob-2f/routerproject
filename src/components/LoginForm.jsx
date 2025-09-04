import React, { useState } from 'react'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const LoginForm = () => {
    const [formData,setformData] = useState({
        email:"",
        password:""
    });

    const [showPassword, setShowPassword] = useState(false);

    const changeHandler = (e)=>{
        const {name,type,value} = e.target;
        setformData (values => ({...values ,[name]:value}));
    }

    return (
        <form action="">
            <div>
                <label htmlFor="email">
                    Email Address <sub>*</sub>
                </label>
                <input type="email" id='email' name='email' placeholder='Enter Email Address'
                    value={formData.email} onChange={changeHandler}
                />
            </div>

            <div>
                <label htmlFor="pass">
                    Password<sub>*</sub>
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
