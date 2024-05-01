import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import Logo from '../dashboard/img/twh.webp'
import { FaCircleUser } from 'react-icons/fa6';
import profileCss from'./css/profile.module.css'


const NavbarProfile = () => {

  return (
    <div>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="/profile"alt="logo"><img className='logo' src={Logo} alt='logo'></img></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 px-3 g-col-3">
                <li class="nav-item ">
                  <a class="nav-link fs-5" href="/">Home</a>
                </li>
                <li class="nav-item ">
                  <a class="nav-link fs-5" href="/profile/berita">Berita</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link fs-5" href="/profile/pengumuman">Pengumuman</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link fs-5" href="/profile/ujian">Ujian</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link fs-5" href="/profile/percobaan">Percobaan</a>
                </li>
              </ul>
              <div className="d-flex" role="search">
              <div className="dropdown">
                <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <FaCircleUser size='31'/>
                </button>
                <ul className="dropdown-menu dropdown-menu-end me-3 border-0 ">
                  <Link to='profile/myAccount' className="dropdown-item">My Account</Link>
                  <li><a className="dropdown-item">Logout</a></li>
                </ul>

              </div>
              </div>
            </div>
          </div>
        </nav>
        <div className={profileCss.mainDashboard}>
        <Outlet/>
        </div>

    </div>
  )
}

export default NavbarProfile;