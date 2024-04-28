import React, { useEffect, useState } from 'react'
import Logo from '../dashboard/img/twh.webp'
import { FaLock } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import './css/index.css'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { verifikasiEmail } from '../../actions/userAction';
import Swal from 'sweetalert2';


const Verifikasi = () => {

  const dispatch = useDispatch();

  const {
    register,
    resetField,
    watch,
    handleSubmit
  } = useForm();

  const [IsSubmit, setIsSubmit] = useState(false)
  const [Verifikasi, setVerifikasi] = useState({
    nisn:'',
    token:''
  })
  
  const navigate = useNavigate();

  const {getVerifikasiEmailResult,getVerifikasiEmailLoading,getVerifikasiEmailError} = useSelector(
    (state)=>state.UserReducers);


  const pindahHalaman = (data) =>{
      setIsSubmit(true)
      setVerifikasi(data)
      dispatch(verifikasiEmail(data))
      // console.log(Verifikasi)
      // console.log(getVerifikasiEmailResult)
    }
    
    useEffect(() => {
      if (IsSubmit) {
        
        if (getVerifikasiEmailResult.data) {
          Swal.fire({
            title: "Akun Anda Telah Aktif!",
            text: "Silahkan Login!",
            icon: "success",
            showConfirmButton:false,
            timer:1000
          })
          .then(()=>{
            navigate('/login')
          })
        }else if(getVerifikasiEmailError.data){
          // console.log(getVerifikasiEmailError)
          Swal.fire({
            title: `${getVerifikasiEmailError.data.message}`,
            text: "Silahkan Cek Kembali",
            icon: "error",
            showConfirmButton:false,
            timer:1000
          });
        }
    }

  }, [IsSubmit,getVerifikasiEmailResult,getVerifikasiEmailError,dispatch])
  return (
    <div className='Dash d-flex justify-content-center align-items-center'>
      <form onSubmit={handleSubmit(pindahHalaman)}>
      <div className="Login row border border-1 shadow shadow-sm justify-content-center" >
        <div className='col-12 d-flex justify-content-center mt-2 '>
        <img src={Logo} className="w-50 img-fluid" alt="..."/>
        </div>
        <div className='col-10 object-fit-cover text-center mb-3 mt-3'>
          <h5>Silahkan Verifikasi Email Anda Terlebih Dahulu</h5>
        </div>
        
          
          <div className='col-10 ms-3 '>  
            <div className="input-group">
              <span className='input-group-text mb-3 '><IoPersonOutline/></span>
              <div className="form-floating mb-3 ">
                <input type="number" className="nisn form-control shadow-none  border border-start-0" 
                      id="nisn" 
                      placeholder="Masukkan Nisn Anda"
                      onkeydown="return false" onwheel="return false"
                      {...register("nisn")}
                      /> 
                <label >Masukkan Nisn Anda</label>  
              </div>
             
            </div>
          </div>
         
          <div className='col-10 ms-3'>  
            <div className="input-group">
              <span className='input-group-text mb-3 '><FaLock/></span>
              <div className="form-floating mb-3">
                <input type="text" className="form-control shadow-none border border-start-0 token" 
                id="token"
                placeholder="name@example.com"
                {...register("token")}
                /> 
                <label >Masukkan Token</label>  
              </div>  
            </div>
          </div>

          <div className='col-10 ms-3 mb-3'>
            
              <button className='btn btn-dark w-100' type='submit'>Verifikasi Email</button>
            
          </div>
         
          {/* <div className='col-10 ms-3 mb-3 text-center'>  
          <span>Belum Memiliki Akun? Silahkan<a href='/Register' className='link link-underline link-underline-opacity-0'> Daftar! </a></span>
          </div> */}
         
        
        </div>
        </form>
    </div>
  )
}

export default Verifikasi