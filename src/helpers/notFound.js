import React from 'react'
import { Link } from 'react-router-dom'
import photos  from '../public/under-maintenance.png'

const NotFound = () => {
  return (
    <div className='position-absolute top-50 start-50 translate-middle text-center'>
        
          <img src={photos} className='img-fluid w-50 px-5'/>  
        <h1 className='text-center'>Page Is Under Working</h1>
          {/* <h1 className='text-center'>Not Found</h1> */}
          <h1 className='text-center'>Back To
            <Link to={'/'} className='link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>
              <span> /Home</span> 
            </Link>
          </h1>
    </div>
  )
}

export default NotFound