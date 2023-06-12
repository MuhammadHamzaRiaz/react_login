import React from 'react'
import { HiOutlineMail, HiOutlineLockClosed } from 'react-icons/hi'
const LoginForm = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [emailFocused, setEmailFocused] = React.useState(false)
    const [passwordFocused, setPasswordFocused] = React.useState(false)
    const emailFocusHandler = () => {
        setEmailFocused(true)
    }
    const passwordFocusHandler = () => {
        setPasswordFocused(true)
    }
    const emailBlurHandler = () => {
        setEmailFocused(false)
    }
    const passwordBlurHandler = () => {
        setPasswordFocused(false)
    }
    const setEmailHandler = e => {
        setEmail(e.target.value)
    }
    const setPasswordHandler = e => {
        setPassword(e.target.value)
    }
    return (
        <div className='mt-10'>
            <div className={`border-2  rounded-md px-5 w-full mt-8 flex items-center relative ${emailFocused ? "border-primary" : "border-gray-300"}`}>
                {emailFocused && <span className='bg-primary rounded-md text-white px-2 py-1 absolute top-[-15px] '>
                    Email
                </span>}
                <span>
                    <HiOutlineMail className='text-2xl text-gray-300 mr-3' />
                </span>
                <input type="text" value={email} onInput={setEmailHandler} onFocus={emailFocusHandler} onBlur={emailBlurHandler} placeholder="Email" className={`bg-transparent outline-none  text-lg w-full sm:py-5 py-4 ${email && "font-semibold"}`} />
            </div>
            <div className={`border-2 relative rounded-md px-5 w-full mt-8 flex items-center ${passwordFocused ? "border-primary" : "border-gray-300"}`}>
                {passwordFocused && <span className='bg-primary rounded-md text-white px-2 py-1 absolute top-[-15px] '>
                    Password
                </span>}
                <span>
                    <HiOutlineLockClosed className='text-2xl text-gray-300 mr-3' />
                </span>
                <input type="password" value={password} onInput={setPasswordHandler} onFocus={passwordFocusHandler} onBlur={passwordBlurHandler} placeholder="Password" className={`bg-transparent sm:py-5 py-4 outline-none  text-lg w-full ${password && "font-semibold"}`} />
                <button className='text-lg font-semibold border-l-2 border-gray-300 pl-3 text-primary'>
                    Forget?
                </button>
            </div>
            <div className='mt-10 flex items-center justify-between'>
                <p className='sm:text-2xl text-xl font-semibold text-gray-400'
                >
                    No account? <button className='text-primary font-semibold '>Signup</button>
                </p>
                <button className='bg-primary text-white py-3 w-32 rounded-md sm:text-2xl text-xl font-semibold hover:text-primary duration-200 hover:bg-white hover:border-primary border' >
                    Login
                </button>
            </div>
        </div>
    )
}

export default LoginForm
