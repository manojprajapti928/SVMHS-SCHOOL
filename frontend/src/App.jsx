import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Home from './Components/Home'
import Dashboard from './Components/Dashboard'
import Admin from './Admin/Admin'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
         <Routes>
          <Route path = "/" element={<Home/>}/>
          <Route path = "/dashboard" element={<Dashboard/>}/>
          <Route path = "/admin" element={<Admin/>}/>
         </Routes>

      </BrowserRouter>
      
    </div>
  )
}
