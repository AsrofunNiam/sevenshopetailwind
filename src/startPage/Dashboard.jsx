import React, { useEffect, useState } from 'react'


export default function Dashboard() {
    const [user, setUser] = useState();
    useEffect(()=>{
        // debugger;
        // convertion data string to object JSON 
        setUser(localStorage.getItem('user'))


    },[])

    return (
        <main className='w-screen min-h-screen flex-col bg-gradient-to-tr from-green-500 to-green-200
        max-w-[500px] mx-auto p-7'>
            <div className='w-full bg-white p-6 shadow-lg flex flex-col gap-4 items-center rounded-lg'>
                <h1 className='text-2xl text-red-500'> Welcome to Seven Shope </h1>
                <img src='https://images.pexels.com/photos/3220360/pexels-photo-3220360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    alt='' className='w-[60px] h-[70] rounded-full object-cover' />
                <h2> verioktavia@gmail.com </h2>

                <button className='h-10 bg-black text-green-100 rounded-lg w-full'> logout
                </button>
            </div>


        </main>
    )
}
