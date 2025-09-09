import React, { useState } from 'react'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SignupForm = ({ setIsLoggedIn }) => {
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
    const [accountType,setAccountType] = useState("student");

    const changeHandler = (e) => {
        const { name, type, value } = e.target;
        setFormData(values => ({ ...values, [name]: value }));
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            toast.error("passwords donot match");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account created.", {
            position: "top-right",
            autoClose: 2000
        });

        console.log(formData);
        navigate("/login");
    }
    return (<>
        <div className=''>
            <div className='flex gap-x-5 justify-between bg-[#161D29] w-max px-6 py-2 rounded-full'>
                <button className={`${`accountType` === "student" ?
                    "bg-black rounded-full px-6 py-3 mr-4   font-semibold text-[15px]"
                    :
                    ""
                }`}
                onClick={()=>setAccountType("student")}>
                    Student</button>
                <button className={`${accountType === "instructor" ?
                    "bg-black rounded-full px-6 py-3 mr-4   font-semibold text-[15px]"
                    :
                    ""
                }`}
                    onClick={()=> setAccountType("instructor")}
                >Instructor</button>
            </div>
            <form action="" onSubmit={submitHandler} className='space-y-2'>

                <div className='flex  justify-between gap-x-6 py-1'>
                    <div className='flex flex-col space-y-1'>
                        <label htmlFor="firstname" className='text-[16px] text-[#F1F2FF]'>First Name<sup
                            className='text-[red] '>*</sup></label>
                        <input type="text" id='firstname' name='firstname' placeholder='Enter first name' required
                            value={formData.firstname} onChange={changeHandler}
                            className='outline-0  text-[#F1F2FF]  bg-[#3a3a3aa3] px-2 py-2 rounded-md  border-b-1 border-b-gray-300'
                        />
                    </div>
                    <div className='flex flex-col space-y-1'>
                        <label htmlFor="lastname" className='text-[16px] text-[#F1F2FF]' >Last Name<sup className='text-[red] '>*</sup></label>
                        <input type="text" id='lastname' name='lastname' placeholder='Enter last name' required
                            value={formData.lastname} onChange={changeHandler}
                            className='outline-0  text-[#F1F2FF]  bg-[#3a3a3aa3] px-2 py-2 rounded-md  border-b-1 border-b-gray-300'
                        />
                    </div>
                </div>

                <div className='flex flex-col gap-y-1'>
                    <label htmlFor="email" className='text-[16px] text-[#F1F2FF]'>
                        Email Address <sup className='text-[red] '>*</sup>
                    </label>

                    <input type="email" id='email' name='email' placeholder='Enter email address' required
                        value={formData.email} onChange={changeHandler}
                        className='outline-0  text-[#F1F2FF]  bg-[#3a3a3aa3] px-2 py-2 rounded-md  border-b-1 border-b-gray-300'
                    />
                </div>
                <div  className='flex  justify-between gap-x-6 py-1'>
                    <div className='flex flex-col space-y-1  relative'>
                        <label htmlFor="createPass"  className='text-[16px] text-[#F1F2FF]'>Create Password<sup  className='text-[red] '>*</sup></label>
                        <input type={showPassword1 ? "text" : "password"} id='createPass' name='password' placeholder='Enter Password' required
                            onChange={changeHandler}
                            className='outline-0  text-[#F1F2FF]  bg-[#3a3a3aa3] px-2 py-2 rounded-md  border-b-1 border-b-gray-300'
                        />
                        <span onClick={() => setShowPassword1(!showPassword1)} className='absolute right-2  top-[38px] text-2xl text-[grey] '>
                            {showPassword1 ? <FaRegEye /> : <FaRegEyeSlash />}

                        </span>
                    </div>
                    <div className='flex flex-col space-y-1  relative'>
                        <label htmlFor="confirmPass"  className='text-[16px] text-[#F1F2FF]'>Confirm Password<sup  className='text-[red] '>*</sup></label>
                        <input type={showPassword2 ? "text" : "password"} id='confirmPass' name='confirmPassword' placeholder='confirm Password' required
                            value={formData.confirmPassword} onChange={changeHandler}
                            className='outline-0  text-[#F1F2FF]  bg-[#3a3a3aa3] px-2 py-2 rounded-md  border-b-1 border-b-gray-300'
                        />
                        <span onClick={() => setShowPassword2(!showPassword2)} className='absolute right-2 top-[38px] text-2xl text-[grey] '>
                            {showPassword2 ? <FaRegEye /> : <FaRegEyeSlash />}
                        </span>
                    </div>

                </div>


                <div className='flex justify-center items-center bg-[#FFD60A] mt-12 rounded-lg text-black font-semibold
                
            ' >
                <button className='w-full py-2  '>
                    Create Account
                </button>
            </div>
            </form>

        </div>

    </>
    )
}

export default SignupForm