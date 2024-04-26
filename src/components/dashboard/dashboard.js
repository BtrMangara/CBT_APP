import React, { useEffect, useState } from 'react'
// import DummyImage from './img/image1.jpg'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { getBerita, getPengumuman } from '../../actions/userAction';
import parse from 'html-react-parser'
export const Dashboard = () => {
  const dispatch = useDispatch();


  const {getBeritaResult,getBeritaLoading,getBeritaError} = useSelector(
    (state)=>state.ContentReducers);
  const {getPengumumanResult,getPengumumanLoading,getPengumumanError} = useSelector(
    (state)=>state.ContentReducers);
  
    const [ContentBerita, setContentBerita] = useState({
    page_size:10,
    page_number:1,
    search:'',
    })

    const [ContentPengumuman, setContentPengumuman] = useState({
      page_size:10,
      page_number:1,
      search:'',
    })


  useEffect(() => {
    dispatch(getBerita(ContentBerita))
    dispatch(getPengumuman(ContentPengumuman))
   
  }, [dispatch])
  
  return (
    <div className='dashboard'>
      <div className="container mt-4">
          <div className='row gap-5 m-0 p-0'>
            
            <div className='col-8'> 
              <div className='Garis mb-3' >
                  <h3 style={{ fontWeight:700, marginTop:'20px', color:'#485F6A', marginLeft:'10px'}}>Berita</h3>
              </div>
            </div>

            <div className='col-3'>
              <div className='mb-3' style={{ height:'35px', width:'1svb',backgroundColor:'red' }}>
                  <h3 style={{ fontWeight:700, marginTop:'20px', color:'red', marginLeft:'10px'}}>Pengumuman</h3>
              </div>

            </div>
          </div>
        <div className='row row-gap-5'>
          <div className='col-8 bg-light'>
            
            <div className='row row-gap-4 mt-3'>
              <div className='col-12 d-flex justify-content-end ps-2'>
                <div class="input-group mb-3 w-50">
                  <span class="input-group-text shadow shadow-none border border-0 border-bottom rounded-0 bg-light"><FaMagnifyingGlass/></span>
                  <input class="form-control shadow shadow-none border border-0 border-bottom rounded-0 bg-light" 
                  type="text" placeholder="Search" aria-label="default input example"/>
                </div>
              </div>

              
              {
                getBeritaResult ?(
                  getBeritaResult.map((berita)=>{
                    return(
                      
                    <div className='col-4 d-flex justify-content-center'>
                      <div className="card border border-0 " style={{ width: "18rem;", height:'25rem'}}>
                        <img src={berita.photo === null? "https://placehold.co/400" :berita.photo.gambar} 
                          className="mx-auto card-img-top border border-0 img-fluid mt-2 object-fit-cover" 
                          style={{ width:'17rem',height:'12rem',maxWidth:'18rem',maxHeight:'12rem' }} alt="..."
                        />
                        <div className="card-body border border-0 m-0">
                          <h5 className="card-title">{berita.judul}</h5>
                            <div className='card-text'>
                              {parse(berita.isi)}
                            </div>
                        </div>
                        <div className='card-footer bg-white border-top'>
                          <div style={{borderLeft: '7px solid red' }}>
                            <small className='fw-medium ms-2'>
                            {parse(berita.kategori)}
                            </small>
                          </div>
                            </div>
                      </div>
                    </div>    
                    )
                  }
                )
                ):getBeritaLoading?(
                  <h1>Loading...</h1>
                ):(
                  <h1>Error</h1>
                ) 
              }

            </div>

            <div className='col-12 d-flex justify-content-end rounded'>
              <nav aria-label="Page navigation example" className='bg-light'>
                <ul class="pagination border border-0">
                  <li class="page-item ">
                    <a class="page-link border border-0 bg-light" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li class="page-item"><a class="page-link border border-0 bg-light" href="#">1</a></li>
                  <li class="page-item"><a class="page-link border border-0 bg-light" href="#">2</a></li>
                  <li class="page-item"><a class="page-link border border-0 bg-light" href="#">3</a></li>
                  <li class="page-item">
                    <a class="page-link border border-0 bg-light" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
          </div>
        </div>

          <div className='col-4 rounded ps-5 rounded-2 gx-4 overflow-y-auto' style={{ height:'30rem' }} >
            <div className='row bg-light rounded row-gap-3 justify-content-center '>

              {
                getPengumumanResult?(
                  getPengumumanResult.map((pengumuman,index)=>{
                    return(
                      <div className='col-12'>
                      <div className='row align-items-center'>
                        <div className='col-8'>
                          <div class="card g-0 m-0 border border-0 bg-light">
                            <div class="card-body">
                              <span className='fs-2'>#{index+1}</span>
                              <h5 class="card-title">{pengumuman.judul}</h5>
                              <h6 class="card-subtitle mb-2 text-body-secondary">{parse(pengumuman.isi)}</h6>
                              <h6 class="card-subtitle mb-2 text-body-secondary fw-bolder">{pengumuman.kategori}</h6>
                            </div>
                          </div>
                        </div>
      
                        <div className='col-4'>
                          <img src={pengumuman.photo === null ? "https://placehold.co/400" : pengumuman.photo} className='img-fluid'></img>
                        </div>
      
                      </div>
                    </div>
                    )
                  }
                )
                ):getPengumumanLoading?(
                  <h1>Loading...</h1>
                ):
                <h1>Error</h1>
              }
             
            </div>
          </div>         

        </div>        
      </div>
      
    </div>
  )
}
