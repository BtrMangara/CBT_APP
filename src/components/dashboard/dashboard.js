import React from 'react'
import DummyImage from './img/image1.jpg'


export const Dashboard = () => {
  return (
    <div>
      
      <div className="container-fluid text-center mt-4">
        <div className="row">
          <div className="col-lg-4 mb-3 mb-sm-5">
            <div className="card">
              <div className='justify-content-center align-items-center'>
              <img src={DummyImage} className="dummyImage card-img-top img-fluid" alt="..."/>
              </div>
              <div className="card-body text-start">
                <h5 className="card-title">Terendam Banjir, Sekolah di Cimahi Terpaksa Tunda Ujian</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-3 mb-sm-5">
            <div className="card">
              <div className='justify-content-center align-items-center'>
              <img src={DummyImage} className="dummyImage card-img-top img-fluid" alt="..."/>
              </div>
              <div className="card-body text-start">
                <h5 className="card-title">Terendam Banjir, Sekolah di Cimahi Terpaksa Tunda Ujian</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-3 mb-sm-5">
            <div className="card">
              <div className='justify-content-center align-items-center'>
                <img src={DummyImage} className="dummyImage card-img-top img-fluid" alt="..."/>
              </div>
              <div className="card-body text-start">
                <h5 className="card-title">Guru SMA di Sampang Tercengang Saksikan Siswinya Melahrkan di...</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-3 mb-sm-5">
            <div className="card">
              <div className='justify-content-center align-items-center'>
                <img src={DummyImage} className="dummyImage card-img-top img-fluid" alt="..."/>
              </div>
              <div className="card-body text-start">
                <h5 className="card-title">7 Cara Mengatasi Kecemasan Anak Saat Menghadapi Ujian Sekolah</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
    </div>
  )
}
