import React, { useEffect, useState } from 'react'
import './css/login.css'
import Logo from '../dashboard/img/twh.webp'
import { FaLock, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { getLogin } from '../../actions/userAction';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'

export const Login = () => {

  const formSchema = Yup.object().shape({
    password: Yup.string()
    .min(6,"Password Harus Lebih Dari 6 Karakter"),
})


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    resetField,
    handleSubmit,
    watch,
    formState:{errors}
 } = useForm({
    mode:'onTouched',
    resolver: yupResolver(formSchema)
 });
  
  const [ShowPassword, setShowPassword] = useState(false)

  const seePassword = ()=>{
    setShowPassword(!ShowPassword)
  }

  const {getLoginResult,getLoginLoading,getLoginError} = useSelector(
    (state)=>state.UserReducers);

  const Login = (data)=>{
    dispatch(getLogin(data))
  }
  useEffect(() => {
    if(getLoginResult.data){
      Cookies.set('token', getLoginResult.data.token);
      navigate('/profile')
    }else if(getLoginError.data){
      alert(getLoginError.data.message)
    }

  }, [getLoginError,getLoginResult])

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
                      {...register('username')}
                      /> 
                <label >Masukkan Nisn Anda</label>  
              </div>
             
            </div>
          </div>
         
          <div className='col-10 ms-3'>  
            <div className="input-group">
              <span className='input-group-text mb-3 '><FaLock/></span>
              <div className="form-floating mb-3">
                <input type={`${ShowPassword == true ? 'text': 'password'}`} 
                className={`form-control shadow-none border border-start-0 ${ShowPassword == true ?  '' :'fw-bold'} `} 
                id="password" 
                placeholder="name@example.com"
                {...register('password')}
                /> 
                <label >Masukkan Password Anda</label> 
              </div>  
              <button className="input-group-text shadow-sm border border-0 mb-3" onClick={seePassword}>
                {ShowPassword == true ?<FaRegEye/> : <FaRegEyeSlash/> }
              </button>
            </div>
            <p className='g-0 text-danger fw-medium' style={{ fontSize:'12px' }}>{errors.password?.message}</p>
          </div>

          <div className='col-10 ms-3 mb-3'>
          <form onSubmit={handleSubmit(Login)}>
            <button className='btn btn-dark w-100' type='submit'>Login</button>
          </form>
          </div>
         
          <div className='col-10 ms-3 mb-3 text-center'>  
          <span>Belum Memiliki Akun? Silahkan<a href='/Register' className='link link-underline link-underline-opacity-0'> Daftar! </a></span>
          </div>
         
        
      </div>
      
    </div>


  )
}
