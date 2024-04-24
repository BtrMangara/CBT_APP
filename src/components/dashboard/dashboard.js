import React from 'react'
import DummyImage from './img/image1.jpg'


export const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className="container mt-4">
          <div className='row gap-3'>
            
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
        <div className='row gap-5 row-gap-5'>
          <div className='col-8 news-rows bg-light rounded rounded-2'>
            <div className='row row-cols-1 row-cols-md-2 g-4 mb-3 mt-2'>
             
              <div class="col-4 ">
              <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="..." class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
              </div>
              
            </div>
          </div>

          <div className='col-3 bg-light rounder rounded-2'>
            <h1>Hello World</h1>
          </div>
        </div>        
      </div>
      
    </div>
  )
}
