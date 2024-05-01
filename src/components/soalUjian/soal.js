import React from 'react'
import SoalUjianCSS from './css/soalUjian.module.css'

const Soal = () => {
  return (
    <div className='p-3'>
       <div className='w-100 border-bottom'>
        <p className='fs-2 fw-medium'>Soal No 1</p>
       </div>
       <p className=' p-3 fw-medium' style={{ width:'110vh', textAlign:'justify' }}>
       Kamu sedang membaca sebuah artikel tentang kemajuan teknologi dibidang komunikasi yang semakin memudahkan masyarakat untuk saling terhubung satu sama lain. 
       Namun, terdapat pernyataan yang mengemukakan bahwa semakin berkembangnya teknologi komunikasi, semakin berkurangnya kebutuhan akan interaksi tatap muka. 
       Pilih pernyataan yang TIDAK MEMPERLEMAH pendapat yang terdapat dalam artikel tersebut. (Jawaban bisa lebih dari satu).
       </p>
       <div className={`jawaban overflow-y-auto ${SoalUjianCSS.pilihan}`}>
            <div className='d-flex align-items-center p-3'>
                <input class="form-check-input border-black border-2" type="radio" name="flexRadioDefault" id="firstOption"/>
                <label class="form-check-label ms-3 fw-bolder w-75" for="firstOption">
                    Pertemuan tatap muka masih sangat dibutuhkan di beberapa bidang, seperti bisnis dan diplomasi
                </label>
            </div>
            
            <div className='d-flex align-items-center p-3'>
                <input class="form-check-input border-black border-2" type="radio" name="flexRadioDefault" id="firstOption"/>
                <label class="form-check-label ms-3 fw-bolder w-75" for="firstOption">
                    Pertemuan tatap muka masih sangat dibutuhkan di beberapa bidang, seperti bisnis dan diplomasi
                </label>
            </div>
            <div className='d-flex align-items-center p-3'>
                <input class="form-check-input border-black border-2" type="radio" name="flexRadioDefault" id="firstOption"/>
                <label class="form-check-label ms-3 fw-bolder w-75" for="firstOption">
                    Pertemuan tatap muka masih sangat dibutuhkan di beberapa bidang, seperti bisnis dan diplomasi
                </label>
            </div>

        </div>  
        <div className='text-center mt-4 d-flex justify-content-between p-3'>
          <button className='btn btn-warning text-light'>Kembali</button>
    
          <button className='btn btn-info text-light'>Selanjutnya</button>
        </div>
    </div>
  )
}

export default Soal