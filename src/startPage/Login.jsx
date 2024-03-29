import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth"
// import { useNavigate } from "react-router-dom"




export default function Login() {
    // func get to dashboard
    const navigate = useNavigate()

    const handleGoogleLogin = () => {
        const auth = getAuth()
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
            .then((result) => {
                console.info(result.user)
                localStorage.setItem('user', JSON.stringify(result.user))
                navigate("/dashboard")
            })
            .catch((err) => {
                console.error(err)
            })
    }

    const handleEmailPasswordLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const auth = getAuth()

        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                localStorage.setItem('user', JSON.stringify(result.user))
                navigate("/dashboard")
            })
            .catch((err) => {
                console.alert("Terjadi keslahan sisitem ")
            })

    }


    return (
        <main className='w-screen min-h-screen flex-col bg-gradient-to-tr from-green-500 to-green-200
        max-w-[500px] mx-auto p-7'>
            <form className='w-full bg-slate-100 flex flex-col gap-4 shadow-lg rounded-lg mt-8 p-6'
                autoComplete='off' onSubmit={handleEmailPasswordLogin}>
                <h1 className='text-3xl text-center text-blue-500'> Login</h1>
                <div className='flex flex-col gap-2'>
                    <label htmlFor='email'> Email</label>
                    <input type="email" id='email' className='h-10 px-3 rounded-md border-[1px]' />

                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor='email'> Password </label>
                    <input type="password" id='password' className='h-10 px-3 rounded-md border-[1px]' />

                </div>
                <div className='mt-4 flex flex-col gap-2'>
                    <button className='h-10 w-full bg-blue-500 text-white rounded-lg'> Login</button>
                    <hr />
                    <button
                        className='h-10 w-full bg-yellow-500 text-white rounded-lg'
                        type='button' onClick={handleGoogleLogin}>
                        Login Account by
                    </button>
                    <hr />
                    <Link to={'/register'} className='h-10 w-full bg-green-600 text-white rounded-lg flex justify-center items-center'>Register</Link>
                </div>
            </form>

        </main>
    )
}

