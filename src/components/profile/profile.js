import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getBiodata } from '../../actions/userAction';
import Cookies from 'js-cookie';

const Profile = () => {

  const dispatch = useDispatch();
  const token = Cookies.get('token');
  const {getBiodataResult,getBiodataLoading,getBiodataError} = useSelector(
    (state)=>state.UserReducers);

    useEffect(() => {
    dispatch(getBiodata(token))
    }, [dispatch])

  return (
    <div>
      <div className='row'>
        <div className='col-4 mt-3 ms-5'>
          <div>
            {
                getBiodataResult ? 
                <div class="card mb-3" style={{ maxWidth:'18rem' }}>
                  {/* {console.log(getBiodataResult.data)} */}
                <div class="card-header text-bg-info text-center">Your Info</div>
                  <div class="card-body">
                    <div className='row'>
                      <div className='col-12'>
                        <span class="card-text">{getBiodataResult.data.pribadi.nama}</span>
                      </div>
                      <div className='col-12'>
                        <span class="card-text">{getBiodataResult.data.sekolah.nama}</span>
                      </div>
                      <div className='col-12'>
                        <span class="card-text">Kabupaten Tapanuli Utara</span>
                      </div>
                      <div className='col-12'>
                        <span class="card-text">Sumatera Utara</span>
                      </div>
                    </div>
                    {/* <span class="card-text">{getBiodataResult.data}</span> */}
                  </div>
                </div>

                :getBiodataLoading ?<p>{getBiodataLoading}</p>
              
                :<p>{getBiodataError}</p>
            }
          </div>
        </div>

      </div>
    </div>
  )
}

export default Profile;