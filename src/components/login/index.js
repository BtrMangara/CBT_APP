import React from 'react'
import './css/login.css'
import Logo from '../dashboard/img/twh.webp'
import { FaLock } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";

export const Login = () => {
  return (
    <div className='Dash d-flex justify-content-center align-items-center'>
      <div className="Login row border border-1 shadow shadow-sm justify-content-center" >
        <div className='col-12 d-flex justify-content-center mt-2 '>
        <img src={Logo} className="w-50 img-fluid" alt="..."/>
        </div>
        <div className='col-10 object-fit-cover text-center mb-3 mt-3'>
          <h3>Silahkan Login Terlebih Dahulu</h3>
        </div>
        
          
          <div className='col-10 ms-3 '>  
            <div className="input-group">
              <span className='input-group-text mb-3 '><IoPersonOutline/></span>
              <div className="form-floating mb-3 ">
                <input type="number" className="nisn form-control shadow-none  border border-start-0" 
                      id="nisn" 
                      placeholder="Masukkan Nisn Anda"
                      onkeydown="return false" onwheel="return false"
                      /> 
                <label >Masukkan Nisn Anda</label>  
              </div>
             
            </div>
          </div>
         
          <div className='col-10 ms-3'>  
            <div className="input-group">
              <span className='input-group-text mb-3 '><FaLock/></span>
              <div className="form-floating mb-3">
                <input type="password" className="form-control shadow-none border border-start-0 fw-bold" id="password" placeholder="name@example.com"/> 
                <label >Masukkan Password Anda</label>  
              </div>  
            </div>
          </div>

          <div className='col-10 ms-3 mb-3'>  
            <button className='btn btn-dark w-100'>Login</button>
          </div>
         
          <div className='col-10 ms-3 mb-3 text-center'>  
          <span>Belum Memiliki Akun? Silahkan<a href='/Register' className='link link-underline link-underline-opacity-0'> Daftar! </a></span>
          </div>
         
        
        </div>
    </div>


  )
}
