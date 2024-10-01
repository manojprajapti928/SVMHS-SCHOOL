import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css';

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
      <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'active' : ''}>Dashboard</Link>
      <Link to="/admin" className={location.pathname === '/admin' ? 'active' : ''}>Admin</Link>
    </nav>
  )
}