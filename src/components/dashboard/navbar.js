import React from 'react'
import Logo from './img/twh.webp'
import './css/navbar.css'
import { FaCircleUser } from "react-icons/fa6";
import { Outlet } from 'react-router-dom'
import { Dashboard } from './dashboard';

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="#"><img className='logo' src={Logo}></img></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 p-2">
                {/* <li className="nav-item">
                  <a className="nav-link active" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Pengumuman</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Berita</a>
                </li> */}
                
              </ul>
              <div className="d-flex" role="search">
              <div class="dropdown">
                <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <FaCircleUser size='31'/>
                </button>
                <ul class="dropdown-menu dropdown-menu-end me-3 border-0 ">
                  <li><a class="dropdown-item" href="#">Login</a></li>
                  <li><a class="dropdown-item" href="#">Register</a></li>
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
