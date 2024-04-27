import React, { useEffect, useState } from 'react'
import './css/index.css'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
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

  const navigate = useNavigate();
  const { register, resetField, handleSubmit } = useForm();
  const dispatch = useDispatch();

 
  const [ValidNisn, setValidNisn] = useState(false)
  const [isCheckNisn, setisCheckNisn] = useState(false)
  // const [Nisn, setNisn] = useState('')
  

  const cekNisn =(data)=>{
    // console.log(data)
    setisCheckNisn(true) 
    dispatch(getNisn(data.nisn));
    // setNisn(data.nisn)
    // console.log(data.nisn)
    
  }
  useEffect(() => {
    if (isCheckNisn) {
      if (getNisnResult) {
        // console.log(
        navigate(`/registerBiodata/${getNisnResult.data.nisn}`)
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

  }, [getNisnResult,getNisnError])

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


     
      </div>
    </div>
  )
}
