import React, { useState } from 'react'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SignupForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

    const changeHandler = (e) => {
        const { name, type, value } = e.target;
        setFormData(values => ({ ...values, [name]: value }));
    }

    const submitHandler  = (e)=>{
        e.preventDefault();
        if(formData.password !== formData.confirmPassword){
            toast.error("passwords donot match");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account created.",{
            position:"top-right",
            autoClose:2000
        });

        console.log(formData);
        navigate("/login");
    }
    return (<>

        <div>
            <button>Student</button>
            <button>Instructor</button> 
        </div>
        <form action="" onSubmit={submitHandler}>

            <div>
                <div>
                    <label htmlFor="firstname">First Name<sup>*</sup></label>
                    <input type="text" id='firstname' name='firstname' placeholder='Enter first name' required
                        value={formData.firstname} onChange={changeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="lastname">Last Name<sup>*</sup></label>
                    <input type="text" id='lastname' name='lastname' placeholder='Enter last name' required
                        value={formData.lastname} onChange={changeHandler}
                    />
                </div>
            </div>

            <div>
                <label htmlFor="email">
                    Email Address<sup>*</sup>
                </label>
                <input type="email" id='email' name='email' placeholder='Enter Email Address'
                    value={formData.email} onChange={changeHandler}
                />
            </div>
            <div>
                <div>
                    <label htmlFor="createPass">Create Password<sup>*</sup></label>
                    <input type={showPassword1 ? "text" : "password"} id='createPass' name='password' placeholder='Enter Password' required
                        onChange={changeHandler}
                    />
                    <span onClick={() => setShowPassword1(!showPassword1)}>
                        {showPassword1 ?  <FaRegEye /> :  <FaRegEyeSlash />}
                       
                    </span>
                </div>
                <div>
                    <label htmlFor="confirmPass">Confirm Password<sup>*</sup></label>
                    <input type={showPassword2 ? "text" : "password"} id='confirmPass' name='confirmPassword' placeholder='confirm Password' required
                        value={formData.confirmPassword} onChange={changeHandler}
                    />
                    <span onClick={() => setShowPassword2(!showPassword2)}>
                         {showPassword2 ?  <FaRegEye /> :  <FaRegEyeSlash />}
                    </span>
                </div>

            </div>


            <div>
                <button>Create Account</button>
            </div>
        </form>
    </>
    )
}

export default SignupForm