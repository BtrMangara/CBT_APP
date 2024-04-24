import React, { useState } from 'react'
import './css/index.css'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import Logo from '../dashboard/img/twh.webp'

export const Register = () => {

  const [Eye, setEye] = useState(false)
  const [Nisn, setNisn] = useState(false)

  const seePassword=()=>{
    setEye(!Eye);
  }

  const cekNisn =()=>{
    setNisn(true)
  }

  const noscroll=()=>{
    return false
  }

  return (
    <div className='Dash d-flex justify-content-center align-items-center'>
    <div className="Register row border border-1 shadow shadow-sm p-0 g-0 align-items-center">
      <div className='col-12 d-flex justify-content-center mt-2 '>
      <img src={Logo} className="img-fluid w-50" alt="..."/>
      </div>
      <div className='col-12 d-flex justify-content-center mt-2 '>
      <h3 className='text-center'>Silahkan Melakukan Registrasi Terlebih Dahulu</h3>
      </div>
      
        <div className={`row justify-content-center ${Nisn === true?'visually-hidden':'' }`}>
          <div className='col-8'>  
            <div className="input-group">
              <span className='input-group-text mb-3'><IoPersonOutline/></span>
              <div className="form-floating mb-3 ">
                <input type="number" className="nisn form-control shadow-none border border-start-0 border-end-0" 
                      id="nisn" 
                      placeholder="Masukkan Nisn Anda"
                      onKeyDown={noscroll} onWheel={noscroll}
                      onScroll={noscroll}
                      /> 
                <label>Masukkan Nisn Anda</label>  
              </div>
              <button className='btn btn-nisn input-group-text mb-3' onClick={cekNisn}><FaMagnifyingGlass/></button>
            </div>
          </div>
        </div>
        
          {/* <div className='col-10 ms-3 mb-3'>  
            <button className='btn btn-dark w-100' onClick={Register}><FaMagnifyingGlass className='mb-1'/> Cek Nisn</button>
          </div> */}
        
      <div className={`row mb-3 p-0 gx-3 gy-0 m-0 px-4 ${Nisn === true ? "":"visually-hidden"}`}>

        <div className='col-6'>
            <span>Nisn</span>
          <div className="input-group mb-3">
            <span className="input-group-text border border-0"  >
              <FaRegUserCircle/>
            </span>
          <input type="number" className="nisn form-control bg-light form-control-sm shadow-none  border border-start-0" 
            id="nisn" 
            placeholder="123123"
            onkeydown="return false" onwheel="return false"
            disabled readonly
          /> 
          </div>
        </div>
      
        <div className='col-6 '>
        <span>Email</span>
          <div className="input-group mb-3">
            <span className="input-group-text btn-nisn border border-0" >
              <FaRegUserCircle/>
            </span>
          <input className="form-control form-control-sm shadow-sm" type="text" placeholder=""/>
          </div>
        </div>
        
        <div className='col-6'>
          <span>Nama</span>
          <div className="input-group mb-3">
          <input className="form-control form-control-sm shadow-sm" type="text" placeholder=""/>
          </div>
        </div>
      
        <div className='col-6 '>
          <span>Tanggal Lahir</span>
          <div className="input-group mb-3">
          <input className="form-control form-control-sm shadow-sm" type="date" placeholder=""/>
          </div>
        </div>
        
        <div className='col-6'>
          <span>Jenis Kelamin</span>
          <div className="input-group mb-3">
          <select className="form-select form-select-sm shadow-sm" placeholder="">
          <option value=''disabled selected>Select Your Gender</option>
            <option value="1">Laki-Laki</option>
            <option value="2">Perempuan</option>
          </select>

          </div>
        </div>
      
        <div className='col-6 '>
          <span>Agama</span>
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
        <span>Password</span>
          <div className="input-group mb-3">
          <input className={`form-control form-control-sm shadow-none ${Eye === true ? '' :'fw-bold border'} border-0`} type={`${Eye === true ? 'text' :'password'}`} placeholder=""/>
          <button className="input-group-text btn-eye shadow-sm border border-0" onClick={seePassword}>
              {Eye === true ? <FaRegEyeSlash/> :<FaRegEye/> }
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
