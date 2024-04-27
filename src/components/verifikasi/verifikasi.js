import React, { useEffect, useState } from 'react'
import Logo from '../dashboard/img/twh.webp'
import { FaLock } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import './css/index.css'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { verifikasiEmail } from '../../actions/userAction';


const Verifikasi = () => {

  const dispatch = useDispatch();

  const {
    register,
    resetField,
    watch,
    handleSubmit
  } = useForm();

  const [IsSubmit, setIsSubmit] = useState(false)
  // const [Verifikasi, setVerifikasi] = useState({
  //   nisn:'',
  //   token:''
  // })
  
  const navigate = useNavigate();

  const {getVerifikasiEmailResult,getVerifikasiEmailLoading,getVerifikasiEmailError} = useSelector(
    (state)=>state.UserReducers);


  const pindahHalaman = (data) =>{
      setIsSubmit(true)
      dispatch(verifikasiEmail(data))
      // console.log(data)
    }

    useEffect(() => {
      if (IsSubmit) {
        setIsSubmit(false)
        if (!getVerifikasiEmailResult) {
          console.log('first')
        }
      // console.log(getVerifikasiEmailResult.data)
      // console.log(getVerifikasiEmailError)
    }

  }, [IsSubmit,console.log(getVerifikasiEmailResult)])
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
            <form onSubmit={handleSubmit(pindahHalaman)}>
              <button className='btn btn-dark w-100'>Verifikasi Email</button>
            </form>
          </div>
         
          {/* <div className='col-10 ms-3 mb-3 text-center'>  
          <span>Belum Memiliki Akun? Silahkan<a href='/Register' className='link link-underline link-underline-opacity-0'> Daftar! </a></span>
          </div> */}
         
        
        </div>
    </div>
  )
}

export default Verifikasi