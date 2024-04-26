import axios from "axios";
// import 'dotenv'

const URL_API = process.env.REACT_APP_API_KEY;

export const GET_LOGIN = 'GET_LOGIN';
export const GET_NISN = 'GET_NISN';
export const GET_BERITA = 'GET_BERITA';
export const GET_PENGUMUMAN = 'GET_PENGUMUMAN';
export const REGISTER_SISWA = 'REGISTER_SISWA'


export const getLogin=(nisn)=>{
    return async(dispatch)=>{
        //loading

        dispatch({
            type:GET_LOGIN,
            payload:{
                loading:true,
                data:false,
                errorMessage:false,
            }
        })

        await axios({
            method:'GET',
            url:`${URL_API}nisn?nisn=${nisn}`,
            timeout:12000
        })
        .then((response)=>{
            
            console.log(response)
            dispatch({
                type:GET_LOGIN,
                payload:{
                    loading:false,
                    data:response.data,
                    errorMessage:false,
                }
            })
        })
        .catch((error)=>{
            console.log(`${process.env.URL_API}`)
            dispatch({
                type:GET_LOGIN,
                payload:{
                    loading:false,
                    data:false,
                    errorMessage:error.message,
                }
            })
        })

    }
}

export const getNisn=(data)=>{
    // console.log(data.nisn)
    return async(dispatch)=>{
        //loading

        dispatch({
            type:GET_LOGIN,
            payload:{
                loading:true,
                data:false,
                errorMessage:false,
            }
        })

        await axios({
            method:'GET',
            url:`${URL_API}nisn?nisn=${data}`,
            timeout:12000
        })
        .then((response)=>{
            // console.log(response)
            dispatch({
                type:GET_NISN,
                payload:{
                    loading:false,
                    data:response.data,
                    errorMessage:false,
                }
            })
        })
        .catch((error)=>{
        //    console.log(error)
            dispatch({
                type:GET_NISN,
                payload:{
                    loading:false,
                    data:false,
                    errorMessage:error.response.data,
                }
            })
        })

    }
}

export const getBerita = (data)=>{
    // console.log(data)
    return async(dispatch)=>{
        //loading

        dispatch({
            type:GET_BERITA,
            payload:{
                loading:true,
                data:false,
                errorMessage:false,
            }
        })

        await axios({
            method:'GET',
            url:`${URL_API}berita?page_size=${data.page_size}&page_number=${data.page_number}&search=${data.search} `,
            timeout:12000
        })
        .then((response)=>{
            // console.log(response.data.data)
            dispatch({
                type:GET_BERITA,
                payload:{
                    loading:false,
                    data:response.data.data,
                    errorMessage:false,
                }
            })
        })
        .catch((error)=>{
            // console.log(error.response.data.message)
            dispatch({
                type:GET_BERITA,
                payload:{
                    loading:false,
                    data:false,
                    errorMessage:error.response.data,
                }
            })
        })

    }
}

export const getPengumuman = (data)=>{
    // console.log(data)
    return async(dispatch)=>{
        //loading

        dispatch({
            type:GET_BERITA,
            payload:{
                loading:true,
                data:false,
                errorMessage:false,
            }
        })
        
        await axios({
            method:'GET',
            url:`${URL_API}pengumuman?page_size=${data.page_size}&page_number=${data.page_number}&search=${data.search} `,
            timeout:12000
        })
        .then((response)=>{
            console.log(response.data.data)
            dispatch({
                type:GET_PENGUMUMAN,
                payload:{
                    loading:false,
                    data:response.data.data,
                    errorMessage:false,
                }
            })
        })
        .catch((error)=>{
            
            dispatch({
                type:GET_BERITA,
                payload:{
                    loading:false,
                    data:false,
                    errorMessage:error,
                }
            })
        })


    }
}

export const registerSiswa = (data)=>{
    console.log(data)
    return async(dispatch)=>{
        dispatch({
            type:REGISTER_SISWA,
            payload:{
                loading:false,
                data:false,
                errorMessage:false,
            }
        })
        await axios({
            method:'POST',
            url:`${URL_API}register`,
            data:data,
            timeout:12000
        })
        .then((response)=>{
            dispatch({
                type:REGISTER_SISWA,
                payload:{
                    loading:false,
                    data:response.data,
                    errorMessage:false
                }
            })
        })
        .catch((error)=>{
            dispatch({
                type:REGISTER_SISWA,
                payload:{
                    loading:false,
                    data:false,
                    errorMessage:error
                }
            })
        })
    }
}


