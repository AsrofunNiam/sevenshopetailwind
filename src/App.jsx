import React, {useEffect} from 'react'
import { Routes, Route } from 'react-router-dom'
import { auth } from './firebase'
// import './firebase'
import Dashboard from './startPage/Dashboard'
import Login from './startPage/Login'
import Register from './startPage/Register'

export default function App() {
  useEffect(()=>{
    console.info(auth)
  },[])


  return (
    <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    
    </Routes>
  )
}
