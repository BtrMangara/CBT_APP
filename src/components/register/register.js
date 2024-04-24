import React from 'react'
import './css/index.css'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

import Logo from '../dashboard/img/twh.webp'

export const Register = () => {
  return (
    <div className='Dash d-flex justify-content-center align-items-center'>
    <div className="Register row border border-1 shadow shadow-sm p-0 g-0 align-items-center">
      <div className='col-12 d-flex justify-content-center mt-2 '>
      <img src={Logo} className="img-fluid w-50" alt="..."/>
      </div>
      <div className='col-12 d-flex justify-content-center mt-2 '>
      <h3 className='text-center'>Silahkan Melakukan Registrasi Terlebih Dahulu</h3>
      </div>
      
      <div className='row mb-3 p-0 gx-3 gy-0 m-0 px-4'>

        <div className='col-6'>
          <span>Nisn</span>
        </div>
        <div className='col-6 '>
          <span>Email</span>
        </div>

        <div className='col-6'>
          <div className="input-group mb-3">
          <input type="number" className="nisn form-control form-control-sm shadow-none  border border-start-0" 
            id="nisn" 
            placeholder="Masukkan Nisn Anda"
            onkeydown="return false" onwheel="return false"
          /> 
            <button className="input-group-text btn-nisn border border-0" >
              <FaMagnifyingGlass/>
            </button>
          </div>
        </div>
      
        <div className='col-6 '>
          <div className="input-group mb-3">
            <span className="input-group-text btn-nisn border border-0" >
              <FaRegUserCircle/>
            </span>
          <input className="form-control form-control-sm shadow-sm" type="text" placeholder=""/>
          </div>
        </div>
        
        <div className='col-6'>
          <span>Nama</span>
        </div>
        <div className='col-6 '>
          <span>Tanggal Lahir</span>
        </div>

        <div className='col-6'>
          <div className="input-group mb-3">
          <input className="form-control form-control-sm shadow-sm" type="text" placeholder=""/>
          </div>
        </div>
      
        <div className='col-6 '>
          <div className="input-group mb-3">
          <input className="form-control form-control-sm shadow-sm" type="date" placeholder=""/>
          </div>
        </div>

        <div className='col-6'>
          <span>Jenis Kelamin</span>
        </div>
        <div className='col-6 '>
          <span>Agama</span>
        </div>

        <div className='col-6'>
          <div className="input-group mb-3">
          <select className="form-select form-select-sm shadow-sm" placeholder="">
          <option value=''disabled selected>Select Your Gender</option>
            <option value="1">Laki-Laki</option>
            <option value="2">Perempuan</option>
          </select>

          </div>
        </div>
      
        <div className='col-6 '>
          <div className="input-group mb-3">
          <select className="form-select form-select-sm shadow-sm " placeholder="Pilih Agama Kamu">
            <option value=''disabled selected>Select Your Religion</option>
            <option value="1">Protestan</option>
            <option value="2">Islam</option>
            <option value="3">Katolik</option>
            <option value="3">Buddha</option>
            <option value="3">Hindu</option>
            <option value="3">Konghucu</option>
          </select>
          </div>
        </div>

        
        <div className='col-6'>
          <span>Nomor WhatsApp</span>
        </div>
        <div className='col-6 '>
          <span>Password</span>
        </div>

        <div className='col-6'>
          <div className="input-group mb-3">
          <span className="input-group-text btn-eye shadow-none border border-0" style={{ fontSize:'0.75rem' }}>
              +62
          </span>
          <input type="number" className="nisn form-control form-control-sm shadow-none border border-0"  placeholder="" 
          onkeydown='return false'
          onwheel='return false'/>
          </div>
        </div>
      
        <div className='col-6 '>
          <div className="input-group mb-3">
          <input className="form-control form-control-sm shadow-none fw-bold border border-0" type="password" placeholder=""/>
          <button className="input-group-text btn-eye shadow-sm border border-0" >
              <FaRegEyeSlash/>
            </button>
          </div>
        </div>

        <div className='col-12 '>
          <button className='btn  w-100 btn-register'>Submit</button>
        </div>

      </div>
     
      </div>
    </div>
  )
}
