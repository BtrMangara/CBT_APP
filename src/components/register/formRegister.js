import React, { useState } from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

const FormRegister = (props) => {

    const{
        Biodata,
        ValidNisn
    } = props;
    const [EyeConfirm, setEyeConfirm] = useState(false)
    const [Eye, setEye] = useState(false)

    const seePassword=()=>{
        setEye(!Eye);
      }
    
      const seeConfirmationPassword=()=>{
        setEyeConfirm(!EyeConfirm)
      }

      const biodata = ()=>{

      }
  return (
    <div>
        <form> 
            <div className={`row mb-3 p-0 gx-3 gy-0 m-0 px-4 ${ValidNisn === true ? "":"visually-hidden"}`}>
                {/* {console.log(Biodata)} */}
                
                <div className='col-12'>
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
                    value={Biodata.nisn}
                    /> 
                    </div>
                </div>
            
            <div className='col-6 '>
            <span>Email</span>
                <div className="input-group mb-3">
                <span className="input-group-text btn-nisn border border-0" >
                    <FaRegUserCircle/>
                </span>
                <input className="form-control form-control-sm shadow-sm" type="text" placeholder="" value={Biodata.email}/>
                </div>
            </div>
            
            <div className='col-6'>
                <span>Nama</span>
                <div className="input-group mb-3">
                <input className="form-control form-control-sm shadow-sm" type="text" placeholder="" value={Biodata.nama}/>
                </div>
            </div>
            
            <div className='col-6 '>
                <span>Tanggal Lahir</span>
                <div className="input-group mb-3">
                <input className="form-control form-control-sm shadow-sm" type="date" placeholder="" value={Biodata.tanggal_lahir}/>
                </div>
            </div>
            
            <div className='col-6'>
                <span>Jenis Kelamin</span>
                <div className="input-group mb-3">
                <select className="form-select form-select-sm shadow-sm" placeholder=""value={Biodata.jk}>
                <option value=''disabled selected>Select Your Gender</option>
                <option value="L">Laki-Laki</option>
                <option value="K">Perempuan</option>
                </select>

                </div>
            </div>
            
            <div className='col-6 '>
                <span>Agama</span>
                <div className="input-group mb-3">
                <select className="form-select form-select-sm shadow-sm " placeholder="Pilih Agama Kamu"value={Biodata.agama}>
                <option value=''disabled selected>Select Your Religion</option>
                <option value="Protestan">Protestan</option>
                <option value="Islam">Islam</option>
                <option value="Katolik">Katolik</option>
                <option value="Buddha">Buddha</option>
                <option value="Hindu">Hindu</option>
                <option value="Konghucu">Konghucu</option>
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
                onwheel='return false'
                value={Biodata.wa}/>
                </div>
            </div>
            
            <div className='col-6 '>
            <span>Konfirmasi Password</span>
                <div className="input-group mb-3">
                <input
                className={`form-control form-control-sm shadow-none ${Eye === true ? '' :'fw-bold border'} border-0`} 
                type={`${EyeConfirm === true ? 'text' :'password'}`} 
                placeholder=""
                />
                
                <button className="input-group-text btn-eye shadow-sm border border-0" onClick={seeConfirmationPassword}>
                    {EyeConfirm === true ? <FaRegEyeSlash/> :<FaRegEye/> }
                </button>
                </div>
            </div>
            <div className='col-6 '>
            <span>Password</span>
                <div className="input-group mb-3">
                <input className={`form-control form-control-sm shadow-none 
                ${Eye === true ? '' :'fw-bold border'} border-0`} type={`${Eye === true ? 'text' :'password'}`} 
                placeholder=""
                required/>
                <button className="input-group-text btn-eye shadow-sm border border-0" onClick={seePassword}>
                    {Eye === true ? <FaRegEyeSlash/> :<FaRegEye/> }
                </button>
                </div>
            </div>

            <div className='col-12 w-100'>
                <button className='btn btn-info'>Hello World</button>
            </div>

            </div>
      </form>
    </div>
  )
}

export default FormRegister