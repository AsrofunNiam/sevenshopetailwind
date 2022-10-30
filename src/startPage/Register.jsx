import React from 'react'
import { Link } from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"


export default function Register() {

    const handleGoogleRegister = () => {
        const auth = getAuth()
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
            .then((result) => {
                console.info(result.user)
            })
            .catch((err) => {
                console.error(err)
            })
    }

    return (
        <main className='w-screen min-h-screen flex-col bg-gradient-to-tr from-blue-500 to-green-200
        max-w-[500px] mx-auto p-7'>
            <form className='w-full bg-slate-100 flex flex-col gap-4 shadow-lg rounded-lg mt-8 p-6'
                autoComplete='off'>
                <h1 className='text-3xl text-center text-blue-500'>Register</h1>
                <div className='flex flex-col gap-2'>
                    <label htmlFor='email'> Email</label>
                    <input type="email" id='email' className='h-10 px-3 rounded-md border-[1px]' />

                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor='email'> Password </label>
                    <input type="password" id='password' className='h-10 px-3 rounded-md border-[1px]' />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor='password2'> Confirmasi Password </label>
                    <input type="password" id='password' className='h-10 px-3 rounded-md border-[1px]' />
                </div>
                <div className='mt-4 flex flex-col gap-2'>
                    <button className='h-10 w-full bg-blue-500 text-white rounded-lg'> Login</button>
                    <hr />
                    <button
                        className='h-10 w-full bg-yellow-500 text-white rounded-lg '
                        type='button' onClick={handleGoogleRegister}>
                        Login Account by
                    </button>
                    <hr />
                    <Link to={'/'} className='h-10 w-full bg-red-600 text-white rounded-lg flex justify-center items-center'>Register</Link>
                </div>
            </form>

        </main>
    )
}

