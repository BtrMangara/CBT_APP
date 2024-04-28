import React, { useEffect, useState } from 'react'
import Logo from './img/twh.webp'
import './css/navbar.css'
import { FaCircleUser } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import { Dashboard } from './dashboard';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { getBiodata } from '../../actions/userAction';

export const Navbar = () => {

  const token = Cookies.get('token');
  const dispatch = useDispatch();
  const [Status, setStatus] = useState(false) 

  const {getBiodataResult,getBiodataLoading,getBiodataError} = useSelector(
    (state)=>state.UserReducers);

    
    useEffect(() => {
    dispatch(getBiodata(token))
    if (getBiodataResult.data) {
      setStatus(true)
    }
    }, [Status,dispatch])


  return (
    <div>
      <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="/"alt="logo"><img className='logo' src={Logo} alt='logo'></img></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 px-3 g-col-3">
                <li class="nav-item ">
                  <a class="nav-link fs-5" href="#">Berita</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link fs-5" href="#">Pengumuman</a>
                </li>
              </ul>
              <div className="d-flex" role="search">
              <div className="dropdown">
                <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <FaCircleUser size='31'/>
                </button>
                {Status == false ?  
                <ul className="dropdown-menu dropdown-menu-end me-3 border-0 ">
                  <Link to='/login' className="dropdown-item" href="login">Login</Link>
                  <li><a className="dropdown-item" href="/register">Register</a></li>
                </ul>
                 :
                 <ul className="dropdown-menu dropdown-menu-end me-3 border-0 ">
                  <Link to='/login' className="dropdown-item" href="login">Hello</Link>
                  <li><a className="dropdown-item" href="/register">Kawwan</a></li>
                </ul>
                 }
              </div>
              </div>
            </div>
          </div>
        </nav>

      <div>
      <Dashboard/>
      </div>
        

    </div>
  )
}
