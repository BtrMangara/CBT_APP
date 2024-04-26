import React, { useEffect, useState } from 'react'
import './css/index.css'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import Logo from '../dashboard/img/twh.webp'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { getNisn } from '../../actions/userAction';
import Swal from 'sweetalert2';

export const Register = () => {
  const {getNisnResult,getNisnLoading,getNisnError} = useSelector(
    (state)=>state.UserReducers);

  const noscroll=()=>{
    return false
  }

  const seePassword=()=>{
    setEye(!Eye);
  }

  const seeConfirmationPassword=()=>{
    setEyeConfirm(!EyeConfirm)
  }
  
  const verifikasi=()=>{
    navigate('/verifikasiEmail')
  }

  const navigate = useNavigate();
  const { register, resetField, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const [EyeConfirm, setEyeConfirm] = useState(false)
  const [Eye, setEye] = useState(false)
  const [ValidNisn, setValidNisn] = useState(false)
  const [isCheckNisn, setisCheckNisn] = useState(false)
  const [Biodata, setBiodata] = useState({
        nisn: '',
        nama: '',
        jk: '',
        agama: '',
        tanggal_lahir:'',
        email:'',
        wa:''
  })

  

  const cekNisn =(data)=>{
    // console.log(nisn)
    setisCheckNisn(true)
    // setnisn(data.nisn)
    dispatch(getNisn(data.nisn));
    
  }

  const biodata = (data)=>{
    // console.log(Biodata)
    setBiodata({
      nisn: data.nisn,
      nama: data.nama,
      jk: data.jk,
      agama: data.agama,
      tanggal_lahir: data.tanggal_lahir,
      email: data.email,
      wa: data.wa
    }
    );
    
   
  }
  
  useEffect(() => {
    
    // console.log(nisn)

    if (isCheckNisn) {
      // cekNisn();
      if (getNisnResult) {
        biodata(getNisnResult.data);
        setValidNisn(true);
        Swal.fire({
          title: "Data Siswa Ditemukan",
          text: "Silahkan Isi Biodata Diri Anda!",
          icon: "success",
          showConfirmButton:false,
          timer:1000
        });
        
      }
      else if(getNisnError){
        Swal.fire({
          title: getNisnError.message,
          text: "Silahkan Periksa Nisn Anda!",
          icon: "error",
          showConfirmButton:false,
          timer:1000
        });
      }
    }

  }, [getNisnResult,getNisnLoading,getNisnError])

  return (
    <div className='Dash d-flex justify-content-center align-items-center'>
    <div className="Register row border border-1 shadow shadow-sm p-0 g-0 align-items-center">
      <div className='col-12 d-flex justify-content-center mt-2 '>
      <img src={Logo} className="img-fluid w-50" alt="..."/>
      </div>
      <div className='col-12 d-flex justify-content-center mt-2 '>
      <h3 className='text-center'>Silahkan Melakukan Registrasi Terlebih Dahulu</h3>
      </div>
      
        <div className={`row justify-content-center ${ValidNisn === true?'visually-hidden':'' }`}>
          <div className='col-8'>  
          <form onSubmit={handleSubmit(cekNisn)}>
              <div className="input-group">
                <span className='input-group-text mb-3'><IoPersonOutline/></span>
                <div className="form-floating mb-3 ">
                  <input {...register('nisn')} type="number" className="nisn form-control shadow-none border border-start-0 border-end-0" 
                        id="nisn" 
                        placeholder="Masukkan Nisn Anda"
                        onKeyDown={noscroll} onWheel={noscroll}
                        onScroll={noscroll}
                        required
                        /> 
                  <label>Masukkan Nisn Anda</label>  
                </div>
                <button className='btn btn-nisn input-group-text mb-3' type='submit'><FaMagnifyingGlass/></button>
              </div>
            </form>
          </div>
        </div>
        
          {/* <div className='col-10 ms-3 mb-3'>  
            <button className='btn btn-dark w-100' onClick={Register}><FaMagnifyingGlass className='mb-1'/> Cek Nisn</button>
          </div> */}
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
            <input required className={`form-control form-control-sm shadow-none ${Eye === true ? '' :'fw-bold border'} border-0`} 
                  type={`${EyeConfirm === true ? 'text' :'password'}`} 
                  placeholder=""/>
            <button className="input-group-text btn-eye shadow-sm border border-0" onClick={seeConfirmationPassword}>
                {EyeConfirm === true ? <FaRegEyeSlash/> :<FaRegEye/> }
              </button>
            </div>
          </div>
          <div className='col-6 '>
          <span>Password</span>
            <div className="input-group mb-3">
            <input required className={`form-control form-control-sm shadow-none 
            ${Eye === true ? '' :'fw-bold border'} border-0`} type={`${Eye === true ? 'text' :'password'}`} 
            placeholder=""
            />
            <button className="input-group-text btn-eye shadow-sm border border-0" onClick={seePassword}>
                {Eye === true ? <FaRegEyeSlash/> :<FaRegEye/> }
              </button>
            </div>
          </div>

          <div className='col-12 '>
            <button className='btn w-100 btn-register' type='submit'>Submit</button>
          </div>

        </div>
      </form>
     
      </div>
    </div>
  )
}
