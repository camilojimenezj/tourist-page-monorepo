import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../views/Home'
import About from '../views/About'
import Contact from '../views/Contact'
import Login from '../views/Login'
import Register from '../views/Register'
import Places from '../views/Places'
import NotFound from '../views/NotFound'

export default function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/paths" element={<Places type="paths" />} />
      <Route path="/routes" element={<Places type="routes" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
