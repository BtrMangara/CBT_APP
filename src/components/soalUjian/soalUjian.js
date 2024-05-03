import React, { useEffect, useState } from 'react'
import Logo from '../dashboard/img/twh.webp'
import SoalUjianCSS from './css/soalUjian.module.css'
import Soal from './soal'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getSoalUjian } from '../../actions/ujianAction'
import Cookies from 'js-cookie'
const SoalUjian = () => {

    const dispatch = useDispatch();
    const {id_ujian} = useParams();
    const [NoSoal, setNoSoal] = useState(0)
    const token = Cookies.get('token');
    const {getSoalUjianResult,getSoalUjianLoading,getSoalUjianError} = useSelector(
      (state)=>state.UjianReducers);

      // const changeNomor = ()=>{
      //   set
      // }

    useEffect(() => {
      dispatch(getSoalUjian({id_ujian,token}))
     
    }, [dispatch,NoSoal])
    
    // const handlePushSoalUjian = (newSoal) => {
    //   setSoalUjian((prevSoalUjian) => [...prevSoalUjian, newSoal]); // Spread operator for immutability
    // };
  
    return (
    <div className='containter-fluid'>
       <div className={`row align-items-center gx-0 ${SoalUjianCSS.navmain}`}> 
        <div className='col-1 p-3 py-2 '>
        <img className='logo img-fluid ' src={Logo} alt='logo' style={{ width:'100%', height:'100%' }}/>
        </div>
        <div className='col-7'>
          <h2 className='text-start mt-2 text-white fw-bolder mx-3'>Computer Based Test</h2>
        </div>
       </div>
       <div className={SoalUjianCSS.main}>
          <p className={`text-end pe-5 py-3 fw-bolder shadow-sm fs-5 ${SoalUjianCSS.textnama}`}>Hello, John DOe</p>
       
          <div className='row column-gap-3 g-0 d-flex justify-content-center'>
            <div className='col-7 bg-light shadow-sm me-auto ms-5'>
              <div className='text-end'>
                hasjd
              </div>
              <Soal
              getSoalUjianResult = {getSoalUjianResult}
              getSoalUjianError = {getSoalUjianError}
              getSoalUjianLoading = {getSoalUjianLoading}
              NoSoal = {NoSoal}
              setNoSoal = {setNoSoal}
              SoalUjian = {SoalUjian}
              />
            </div>
          <div className='col-3 me-4'>
            <div className='col-12'>
              <div className={`col-12 bg-light shadow-sm border-dark rounded p-4 px-4 me-3 overflow-y-auto ${SoalUjianCSS.noUjian} `} >
              
              <div className='row column-gap-2 row-gap-3 justify-content-center'>
                {
                  getSoalUjianResult.data?(
                    getSoalUjianResult.data.map((soal,index)=>{
                      // console.log(getSoalUjianResult.data)
                      // setSoalUjian(soal)
                      return(
                        <div className='ms-1 col-2 border border-3 justify-content-center border-dark align-items-center py-1 btn btn-;o g-0 p-0 m-0' onClick={()=>{setNoSoal(index)}}>
                            <h5 className='pt-2 text-center' >{soal.number}</h5>
                        </div> 
                      )
                    }
                  )
                  ):getSoalUjianLoading ?
                  (
                    <h1>Loading...</h1>
                  ):
                  <h1>error</h1> 
                } 
                  
                </div>
                
              </div>
            </div>
            <div className='col-12 bg-light p-3 shadow-sm text-end p-4 ps-3 me-3'>
                <button className='btn btn-success px-4'>Submit</button>
            </div>
          </div>
          </div>
       </div>
    </div>
  )
}

export default SoalUjian;