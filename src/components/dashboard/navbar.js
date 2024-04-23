import React from 'react'
import Logo from './img/twh.webp'
import './css/navbar.css'
import { FaCircleUser } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import { Dashboard } from './dashboard';

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="/"alt="logo"><img className='logo' src={Logo} alt='logo'></img></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 p-2">
                
              </ul>
              <div className="d-flex" role="search">
              <div className="dropdown">
                <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <FaCircleUser size='31'/>
                </button>
                <ul className="dropdown-menu dropdown-menu-end me-3 border-0 ">
                  <Link to='/login' className="dropdown-item" href="login">Login</Link>
                  <li><a className="dropdown-item" href="/register">Register</a></li>
                </ul>
              </div>
              </div>
            </div>
          </div>
        </nav>
        <div className='dashboard'>
          
        <div className='Garis'>
          <h3 style={{ fontWeight:700, marginTop:'20px', color:'#485F6A', marginLeft:'10px'}}>Pengumuman</h3>
        </div>
            <div className='news'>
            <Dashboard/>
            </div>
        
        </div>
    </div>
  )
}
