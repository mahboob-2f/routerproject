import React from 'react'
import { LoginForm } from './LoginForm'
import SignupForm from './SignupForm'
import { FcGoogle } from "react-icons/fc";

export const Template = ({ title, desc1, desc2, formtype, image, setIsLoggedIn }) => {
    return (
        <>
            <div className='w-9/12 mx-auto flex justify-between items-center pt-16 pb-12'>
                <div className=' text-white w-4/10'>
                    <div >
                        <h1 className='text-[30px] font-bold  text-[#F1F2FF]'>{title}</h1>
                        <p className='pt-4'>
                            <span className='text-[#AFB2BF] text-[19px]'>{desc1}</span> <br />
                            <span className='text-[#47A5C5] text-[19px] italic'>{desc2}</span>
                        </p>
                    </div>
                    <div className='pt-4'>
                        {
                            formtype === "signup" ?
                                <SignupForm setIsLoggedIn={setIsLoggedIn}></SignupForm> :
                                <LoginForm setIsLoggedIn={setIsLoggedIn} />
                        }
                    </div>
                    <div className=' flex justify-center items-center pt-4'>
                        <div className='w-5/10  text-[#2C333F] '><hr /></div>
                        <p className='w-1/10   text-center text-[#2C333F] text-[14px] '>OR</p>
                        <div className='w-5/10 text-[#2C333F]   '><hr /></div>

                    </div>
                    <div className='flex justify-center items-center pt-3  relative  '>
                         <div className='absolute left-22 text-xl'>
                            <FcGoogle />
                         </div>
                         
                        <button className='w-full py-2 bg-[black] text-[#AFB2BF] border-1 border-[#2C333F] rounded-lg font-semibold'>
                           
                            Sign in with google</button>
                    </div>


                </div>
                <div className='relative'>
                    <img src={image} alt="student's image" loading='lazy' width="450px" height={400} 
                        className='relative z-10 '
                    />
                    <img src="./background.png" alt=" background pattern" loading='lazy' width={558} height={504} 
                        className='absolute top-4 z-1 left-4'
                    />
                </div>
            </div>

        </>

    )
}
