import React, { useEffect } from 'react'
import { TiStopwatch } from "react-icons/ti";
import { CiViewList } from "react-icons/ci";
import { FaRegPlayCircle } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { getDaftarUjian } from '../../actions/ujianAction';
// import { set } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
const Percobaan = () => {

  const dispatch = useDispatch();
  const token = Cookies.get('token');
  const navigate = useNavigate();

  const {getDaftarUjianResult,getDaftarUjianLoading,getDaftarUjianError} = useSelector(
    (state)=>state.UjianReducers);


    function time_convert(num){ 
      var hours = Math.floor(num / 60);  
      var minutes = num % 60;
      return hours + " : " + minutes +" : 00";         
    }

    const KerjakanUjian=(data)=>{
      navigate(`/soalUjian/${data}`)
    }
  useEffect(() => {
    dispatch(getDaftarUjian(token))
    
  }, [dispatch])
  return (
    <div className='container-fluid px-5 mt-3'>
      <h2 className='fw-bolder'>Percobaan</h2>
      <div className='row mt-3 row-gap-5'>
        <div className='col-12 bg-light px-3 shadow shadow-sm p-4'>
          <p className='fs-4 fw-medium'>Langkah - Langkah Mengikuti Percobaan</p>
          <p className='fw-medium ms-4' style={{ fontSize:'13px' }}>
            1. Pilih salah satu ujian percobaan dengan klik Mulai <br/>
            2. Silahkan jawab pertanyaan yang ada sampai selesai<br/>
            3. Bila ingin mengulangi ujian percobaan, klik Reset<br/>
            3. Untuk melakukan ujian yang sebenarnya, klik dashboard pada menu di atas atau klik di <a href='#'>sini</a><br/>
          </p>
          
        </div>

        <div className='col-6 bg-light px-3 shadow shadow-sm p-4'>
          <span className='fs-4 fw-medium'>Daftar Ujian</span>
          <div className='row px-4 mt-1 '>
            {
              getDaftarUjianResult?(
                getDaftarUjianResult.data.map((daftar)=>{
                  return(
                    <div className='col-12 py-3 border-bottom shadow-sm mb-2' style={{ backgroundColor: '#f0f4f7' }}>
                      <p className='fs-5 fw-bolder w-75'>{daftar.nama_ujian}</p>
                        <div className='row '> 
                          <div className='col-6 mt-3 d-flex align-content-center'>
                            <p className='fw-medium' style={{fontSize:'14px' }}>
                              Durasi 
                              <TiStopwatch className='mb-1 ms-2 me-2' style={{ fontSize:'20px' }}/> 
                              {time_convert(daftar.waktu_ujian)}
                              <span className='ms-4'> <CiViewList className='mb-1 ms-2 me-2' style={{ fontSize:'20px' }}/> Soal : 100 </span>
                              <p className='mt-2'>Tanggal Mulai : {new Date(daftar.tanggal_mulai).toLocaleDateString() + ' ' +new Date(daftar.tanggal_mulai).toLocaleTimeString() }
                              <br/>Sampai : {new Date(daftar.tanggal_akhir).toLocaleDateString() + ' ' +new Date(daftar.tanggal_akhir).toLocaleTimeString() }</p>
                            </p> 
                            
                          </div>
                          <div className='col-6 mt-1 text-center'>
                            <button className='btn btn-outline-info text-dark rounded fw-medium ' onClick={()=>{KerjakanUjian(daftar.id_ujian)}}>Mulai <span><FaRegPlayCircle className='ms-2 mb-1'/></span></button>
                            <button className='btn btn-info text-dark rounded fw-medium '>Reset <span><GrPowerReset className='ms-2'/></span></button>
                          </div>
                        </div>
                    </div>
                  )
                }
              )
              ):getDaftarUjianLoading?(
                <h1>Loading</h1>
              ):(
                <h1>error</h1>
              ) 
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Percobaan