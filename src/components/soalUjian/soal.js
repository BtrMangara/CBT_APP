import React, { useEffect } from 'react'
import SoalUjianCSS from './css/soalUjian.module.css'
import parse from 'html-react-parser'

const Soal = (props) => {
    const {
        getSoalUjianResult,
        getSoalUjianError,
        getSoalUjianLoading,
        NoSoal,
        setNoSoal,
        SoalUjian
    } = props;
    // console.log(getSoalUjianResult.data[0])

    const nextSoal=()=>{
        setNoSoal(NoSoal+1);
    }
    const prevSoal=()=>{
        setNoSoal(NoSoal-1);
    }
    useEffect(() => {
        // console.log(SoalUjian)
    }, [])
  return (
    <div className='p-3'>
        {
            getSoalUjianResult.data ?(
                <div>
                    {/* {console.log(getSoalUjianResult.data[NoSoal].type != 'MULTIPLE_CHOICE')} */}
                    <div className='w-100 border-bottom'>
                        <p className='fs-2 fw-medium'>{`Soal No ${getSoalUjianResult.data[NoSoal].number}`}</p>
                    </div>
                        <p className=' p-2 fw-medium' style={{ width:'110vh', textAlign:'justify' }}>
                        {parse(getSoalUjianResult.data[NoSoal].question)}
                        </p>
                    <div className={`jawaban overflow-y-auto ${SoalUjianCSS.pilihan}`}>
                            {getSoalUjianResult.data[NoSoal].options.map((jawaban)=>{
                                // console.log(jawaban.length)
                                return(
                                    <div className='d-flex align-items-center g-0 m-0'>
                                        
                                        <input class="form-check-input border-black border-2 ms-1" type="radio" name="flexRadioDefault" 
                                        id={jawaban.id} 
                                        value={jawaban.value}/>
                                        <label class="form-check-label ms-3 fw-bolder w-100 mt-3" for={jawaban.id}>
                                            {parse(jawaban.label)}
                                        </label>
                                    </div>
                                )
                            })}

                        </div>  
                        <div className='text-center mt-4 d-flex justify-content-between p-3'>
                        <button className='btn btn-warning text-light' disabled={NoSoal===0}
                        onClick={prevSoal}
                        >
                            Kembali
                            </button>
                    
                        <button className='btn btn-info text-light' disabled={NoSoal===getSoalUjianResult.data?.length - 1} 
                        onClick={nextSoal}>Selanjutnya</button>
                        </div>
                </div>
            ): getSoalUjianLoading ? (
                <h1>Loading</h1>
            ): <h1>Error</h1>
        }
       
    </div>
  )
}

export default Soal