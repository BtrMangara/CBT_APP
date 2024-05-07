import React from 'react'
import BeritaCSS from './css/berita.module.css'

const Berita = () => {
  return (
    <div className={`container-fluid g-0 ${BeritaCSS.dashboard} `}>
        <div className='row align-items-center justify-content-center px-3 mt-5'>
            <div className='col-10 text-center'>
                <h1>Berita</h1>
            </div>
            
        </div>
        <div className='row align-items-center px-3 mt-5 gap-0 column-gap-3 justify-content-center'>
            <div className='col-auto bg-white' style={{ width:'20rem' }}>
                <div class="card border-0 shadow-sm" style={{ width:'20rem' }}>
                    <img src='https://placehold.co/400' class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">An item</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">A third item</li>
                    </ul>
                    <div class="card-body">
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                    </div>
                </div>
            </div>
        </div>
    
    </div> 
  )
}

export default Berita