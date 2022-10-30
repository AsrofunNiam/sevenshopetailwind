import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "firebase/auth"


export default function Register() {
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

    //  Func Handler register data new user
    const handleGoogleRegister = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const password2 = e.target.password2.value

        if (!email) {
            return alert("Silakan isi email anda ")
        } if (!password) {
            return alert(" Silakan lengkapi password anda  ")
        } if (!password2) {
            return alert(" Silakan lengkapi konfirmasi password anda  ")
        } if (password2 !== password) {
            return alert(" Samakan password konfirmasi dengan pasword")
        }
        if (password.lenght < 5) {
            return alert(" Inputkan password lebih dari 6 karakter")
        }

        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.info(result.user)
                localStorage.setItem('result', JSON.stringify(result.user))
                navigate("/dashboard")
            })
            .then((err) => {
                console.error(err)
            })



    }

    return (
        <main className='w-screen min-h-screen flex-col bg-gradient-to-tr from-blue-500 to-green-200
        max-w-[500px] mx-auto p-7'>
            <form className='w-full bg-slate-100 flex flex-col gap-4 shadow-lg rounded-lg mt-8 p-6'
                autoComplete='off' onSubmit={handleGoogleRegister}>
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
                    <label htmlFor='password'> Confirmasi Password </label>
                    <input type="password" id='password2' className='h-10 px-3 rounded-md border-[1px]' />
                </div>
                <div className='mt-4 flex flex-col gap-2'>
                    <button className='h-10 w-full bg-blue-500 text-white rounded-lg'
                        type='submit'>
                        Register</button>
                    <button
                        className='h-10 w-full bg-yellow-500 text-white rounded-lg '
                        type='button' onClick={handleGoogleLogin}>
                        Google
                    </button>
                    <Link to={'/'} className='h-10 w-full bg-red-600 text-white rounded-lg flex justify-center items-center'>Login</Link>
                </div>
            </form>

        </main>
    )
}

