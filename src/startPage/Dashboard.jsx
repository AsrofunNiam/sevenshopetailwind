import React, { useEffect, useState } from 'react'
import { getAuth, signOut } from "firebase/auth"
import { useNavigate } from 'react-router-dom'



export default function Dashboard() {

    const [user, setUser] = useState();
    const navigate = useNavigate()

    // convertion data string to object JSON 
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')))
    }, [])
    
    // hadle force Logout and clear localstorage 
    const handleLogout = () => {
        const auth = getAuth()
        signOut(auth)
            .then(result => {
                localStorage.clear()
                navigate("/")
            })
            .catch((err)=>{
                console.error(err)
            })
    }

    return (
        <main className='w-screen min-h-screen flex-col bg-gradient-to-tr from-green-500 to-green-200
        max-w-[500px] mx-auto p-7'>
            <div className='w-full bg-white p-6 shadow-lg flex flex-col gap-4 items-center rounded-lg'>
                <h1 className='text-2xl text-red-500'> Welcome to Seven Shope </h1>
                <img src={user?.photoURL}
                    alt='' className='w-[60px] h-[70] rounded-full object-cover' />
                <h2> {user?.email} </h2>

                <button className='h-10 bg-black text-green-100 rounded-lg w-full' type='button' onClick={handleLogout}> logout
                </button>
            </div>


        </main>
    )
}
