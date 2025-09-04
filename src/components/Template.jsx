import React from 'react'
import { LoginForm } from './LoginForm'
import SignupForm from './SignupForm'

export const Template = ({ title, desc1, desc2, formtype,image }) => {
    return (
        <>
            <div>
                <div>
                    <h1>{title}</h1>
                    <p>
                        <span>{desc1}</span>
                        <span>{desc2}</span>
                    </p>
                </div>
                <div>
                    {
                        formtype === "signup" ?
                            <SignupForm></SignupForm> :
                            <LoginForm />
                    }
                </div>
                <div>
                    <div></div>
                    <p>OR</p>
                    <div></div>

                </div>
                <div>
                    <button>

                        Sign in with google</button>
                </div>


            </div>
            <div>
                <img src={image} alt="student's image" loading='lazy'   width={558} height={504}/>
                <img src="./background.png" alt=" background pattern" loading='lazy'  width={558} height={504}/>
            </div>
        </>

    )
}
