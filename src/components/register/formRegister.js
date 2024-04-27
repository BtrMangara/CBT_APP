import React, { useEffect, useRef, useState } from 'react'
import './css/index.css'
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { useNavigate, useParams } from 'react-router-dom'
import Logo from '../dashboard/img/twh.webp';
import { useDispatch, useSelector } from 'react-redux';
import { getNisn, registerSiswa } from '../../actions/userAction';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Swal from 'sweetalert2';

const FormRegister = () => {
    let password;

    const formSchema = Yup.object().shape({
        password: Yup.string()
        .min(6,"Password Harus Lebih Dari 6 Karakter"),
        cpassword:Yup.string()
        .min(6,"Password Harus Lebih dari 6 Karakter")
        .oneOf([Yup.ref('password')],'Password Tidak Sesuai')
    })

    const {nisn} = useParams();

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

     password = watch("password", "");

    const [EyeConfirm, setEyeConfirm] = useState(false)
    const [Eye, setEye] = useState(false);
    const [isRegister, setisRegister] = useState(false)

    const {getNisnResult} = useSelector(
        (state)=>state.UserReducers);
    
    const [Biodata, setBiodata] = useState({
        nisn: '',
        nama: '',
        jk: '',
        agama: '',
        tanggal_lahir:'',
        email:'',
        wa:'',
        password:''
    })

    


    const seePassword=()=>{
        setEye(!Eye);
    }
    
    const seeConfirmationPassword=()=>{
        setEyeConfirm(!EyeConfirm)
    }
    
    const registrasi=(data)=>{
        if (data.password==data.cpassword) {
            setBiodata({...Biodata,password:data.cpassword})          
            setisRegister(true)          
        }
      }

      useEffect(() => {
          //   console.log(id)
          dispatch(getNisn(nisn))
        if (getNisnResult.data) {
            setBiodata(getNisnResult.data)
        }
        else{
            navigate('/register')   
        }
        if (isRegister) {
            dispatch(registerSiswa(Biodata))
            Swal.fire({
                title: `Berhasil Daftar, Verifikasi Sudah Dikirim Ke Email ${Biodata.email}` ,
                text: "Silahkan Verifikasi Akun Terlebih Dahulu",
                icon: "success",
                showConfirmButton:false,
                timer:1000
              })
              .then(()=>{
                navigate('/verifikasiEmail')
              })
            setisRegister(false)
        }
       

    }, [isRegister,dispatch])
  return (
    <div className='Dash d-flex justify-content-center align-items-center'>
    <div className="Register row border border-1 shadow shadow-sm p-0 g-0 align-items-center">
      <div className='col-12 d-flex justify-content-center mt-2 '>
        <img src={Logo} className="img-fluid w-50" alt="..."/>
      </div>
      <div className='col-12 d-flex justify-content-center mt-2 '>
        <h3 className='text-center'>Silahkan Melakukan Registrasi Terlebih Dahulu</h3>
      </div>
      
        <div className='row justify-content-center '>
          <div className='col-12'>  
          
             
       
                <div className={`row mb-3 p-0 gx-3 gy-0 m-0 px-4 `}>
                  
                    <div className='col-12'>
                        <span>Nisn</span>
                        <div className="input-group mb-3">
                        <span className="input-group-text border border-0"  >
                            <FaRegUserCircle/>
                        </span>
                        <input type="number" className="nisn form-control bg-light form-control-sm shadow-none  border border-start-0" 
                        id="formnisn" 
                        placeholder="123123"
                        onkeydown="return false" onwheel="return false"
                        disabled readonly
                        value={Biodata.nisn}
                        onChange={(e)=>setBiodata({...Biodata,nisn:e.target.value})}
                        /> 
                        </div>
                    </div>
                
                <div className='col-6 '>
                <span>Email</span>
                    <div className="input-group mb-3">
                    <span className="input-group-text btn-nisn border border-0" >
                        <FaRegUserCircle/>
                    </span>
                    <input className="form-control form-control-sm shadow-sm" 
                    type="text" placeholder="" 
                    value={Biodata.email}
                    onChange={(e)=>setBiodata({...Biodata,email:e.target.value})}/>
                    </div>
                </div>
                
                <div className='col-6'>
                    <span>Nama</span>
                    <div className="input-group mb-3">
                    <input className="form-control form-control-sm shadow-sm"
                    type="text" 
                    placeholder="" value={Biodata.nama}
                    onChange={(e)=>setBiodata({...Biodata,nama:e.target.value})}
                    />
                    
                    </div>
                </div>
                
                <div className='col-6 '>
                    <span>Tanggal Lahir</span>
                    <div className="input-group mb-3">
                    <input className="form-control form-control-sm shadow-sm" 
                    type="date" 
                    placeholder="" 
                    value={Biodata.tanggal_lahir}
                    onChange={(e)=>setBiodata({...Biodata,tanggal_lahir:e.target.value})}
                    />
                    </div>
                </div>
                
                <div className='col-6'>
                    <span>Jenis Kelamin</span>
                    <div className="input-group mb-3">
                    <select className="form-select form-select-sm shadow-sm" placeholder=""value={Biodata.jk}
                        onChange={(e)=>setBiodata({...Biodata,jk:e.target.value})}
                    >
                    <option value=''disabled selected>Select Your Gender</option>
                    <option value="L">Laki-Laki</option>
                    <option value="K">Perempuan</option>
                    </select>
                    </div>
                </div>
                
                <div className='col-6 '>
                    <span>Agama</span>
                    <div className="input-group mb-3">
                    <select className="form-select form-select-sm shadow-sm " placeholder="Pilih Agama Kamu"
                    value={Biodata.agama}
                    onChange={(e)=>setBiodata({...Biodata,agama:e.target.value})}
                    >
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
                    <input type="number" className="nisn form-control form-control-sm shadow-none border border-0" 
                    placeholder="" 
                    onkeydown='return false'
                    onwheel='return false'
                    value={Biodata.wa}
                    {...register('nisn')}
                    />
                    </div>
                </div>
                
                <div className='col-6 '>
                <span>Password</span>
                    <div className="input-group">
                    <input
                    required
                    className={`form-control form-control-sm shadow-none ${EyeConfirm === true ? '' :'fw-bold border'} border-0`} 
                    type={`${EyeConfirm === true ? 'text' :'password'}`} 
                    placeholder=""
                    {...register("password")}
                    />
                    
                    <button className="input-group-text btn-eye shadow-sm border border-0" onClick={seeConfirmationPassword}>
                        {EyeConfirm === true ? <FaRegEye/> :<FaRegEyeSlash/> }
                    </button>
                    </div>
                    <p className='g-0 text-danger fw-medium' style={{ fontSize:'12px' }}>{errors.password?.message}</p>
                </div>
                <div className='col-6 '>
                    <span>Konfirmasi Password</span>
                    <div className="input-group">
                    <input className={`form-control form-control-sm shadow-none 
                    ${Eye === true ? '' :'fw-bold border'} border-0`} type={`${Eye === true ? 'text' :'password'}`} 
                    placeholder=""
                    required
                    {...register("cpassword")}
                    />
                    <button className="input-group-text btn-eye shadow-sm border border-0" onClick={seePassword}>
                        {Eye === true ? <FaRegEye/> :<FaRegEyeSlash/> }
                    </button>
                    </div>
                    <p className='g-0 text-danger fw-medium' style={{ fontSize:'12px' }}>{errors.cpassword?.message}</p>
                </div>
                {/* <div className='col-6 '>
                    <span>Password</span>
                    <label for="validationCustomUsername" class="form-label">Username</label>
                    <div class="input-group has-validation">
                    <span class="input-group-text" id="inputGroupPrepend">@</span>
                    <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
                    <div class="invalid-feedback">
                        Please choose a username.
                    </div>
                    </div>
                </div> */}
                    <div className='col-12'>
                    <form className='needs-validation' noValidate onSubmit={handleSubmit(registrasi)}>
                        <button className='btn btn-info w-100 text-light' type='submit'>Submit</button>
                    </form>
                    </div>
                
                </div>
            
    
          </div>
        </div>

      </div>
    </div>
    
  
  )
}

export default FormRegister;