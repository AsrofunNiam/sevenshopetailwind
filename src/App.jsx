import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './startPage/Login'

export default function App() {
  return (
    <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/register' element={<h1> Register Page </h1>}/>
    <Route path='/dashboard' element={<h1> Dashboard Page </h1>}/>
    
    </Routes>
  )
}
