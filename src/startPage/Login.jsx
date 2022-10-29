import React from 'react'

export default function Login() {
    return (
        <main className='w-screen min-h-screen flex-col bg-gradient-to-tr from-green-500 to-green-200
        max-w-[500px] mx-auto'>
            <form className='w-full bg-slate-100 flex flex-col gap-4 shadow-lg rounded-lg mt-8 p-6'
            autoComplete='off'>
            <h1 className='text-3xl text-center text-blue-500'> Login</h1>
                <div className='flex flex-col gap-2'>
                    <label htmlFor='email'> Email</label>
                    <input type="email" id='email' className='h-10 px-3 rounded-md border-[1px]'>
                    </input>
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor='email'> Password </label>
                    <input type="email" id='email' className='h-10 px-3 rounded-md border-[1px]'>
                    </input>
                </div>
                <div>
                <button className='h-10 w-full bg-blue-500 text-white rounded-lg'> Login</button>
                <button className='h-10 w-full bg-yellow-500 text-white rounded-lg'>Login Account by</button>
                <button className='h-10 w-full bg-red-600 text-white rounded-lg'>Register</button>
                
                </div>

            </form>

        </main>
        // <h1>
        // Login Page
        // </h1>
    )
}

