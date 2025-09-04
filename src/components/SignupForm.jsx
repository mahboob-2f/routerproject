import React, { useState } from 'react'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const SignupForm = () => {

    const [formData , setFormData] = useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    const [showPassword1,setShowPassword1] = useState(false);
    const [showPassword2,setShowPassword2] = useState(false);

    const changeHandler = (e)=>{
        const { name,type,value} = e.target;
        setFormData(values => ({...values, [name]:value}));
    }
    return (

        <form action="">
            <div>
                <p>Student</p>
                <p>Instructor</p>
            </div>
            <div>
                <div>
                    <label htmlFor="firstname">First Name<sub>*</sub></label>
                    <input type="text" id='firstname' name='firstname' placeholder='Enter first name'  required 
                        value={formData.firstname}  onChange={changeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="lastname">Last Name<sub>*</sub></label>
                    <input type="text" id='lastname' name='lastname' placeholder='Enter last name' required
                        value={formData.lastname} onChange={changeHandler}
                    />
                </div>
            </div>

            <div>
                <label htmlFor="email">
                    Email Address<sub>*</sub>
                </label>
                <input type="email" id='email' name='email' placeholder='Enter Email Address'
                    value={formData.email} onChange={changeHandler}
                />
            </div>
            <div>
                <div>
                    <label htmlFor="createPass">Create Password<sub>*</sub></label>
                    <input type={showPassword1 ? "text":"password"} id='createPass' name='password' placeholder='Enter Password' required 
                        onChange={changeHandler}
                    />
                    <span onClick={()=> setShowPassword1(!showPassword1)}>
                        <FaRegEye/>
                        <FaRegEyeSlash/>
                    </span>
                </div>
                <div>
                    <label htmlFor="createPass">Confirm Password<sub>*</sub></label>
                    <input type={showPassword2? "text":"password"} id='createPass' name='confirmPassword' placeholder='Enter Password' required 
                        value={formData.confirmPassword} onChange={changeHandler}
                    />
                    <span onClick={()=> setShowPassword2(!showPassword2)}>
                        <FaRegEye/>
                        <FaRegEyeSlash/>
                    </span>
                </div>

            </div>


            <div>
                <button>Create Account</button>
            </div>      
        </form>
    )
}

export default SignupForm