import axios from "axios";

const URL_API = process.env.REACT_APP_API_KEY;

export const GET_DAFTAR_UJIAN = 'GET_DAFTAR_UJIAN';
export const GET_SOAL_UJIAN = 'GET_SOAL_UJIAN';

export const getDaftarUjian = (data)=>{
    
    return async (dispatch)=>{
        dispatch({
            type:GET_DAFTAR_UJIAN,
            payload:{
                loading:true,
                data:false,
                errorMessage:false,
            }
        })
        await axios({
            method:'GET',
            url:`${URL_API}ujian`,
            headers:{
                'Authorization': 'Bearer ' + data
            },
            timeout:12000
        })
        .then((response)=>{
            // console.log(response.data.data)
            dispatch({
                type:GET_DAFTAR_UJIAN,
                payload:{
                    loading:false,
                    data:response.data,
                    errorMessage:false,
                }
            })
        })
        .catch((error)=>{
            // console.log(error.response.data)
            dispatch({
                type:GET_DAFTAR_UJIAN,
                    payload:{
                        loading:false,
                        data:false,
                        errorMessage:error.response,
                    }
            })
        })
    }
}

export const getSoalUjian = (data)=>{
    // console.log(data)
    return async (dispatch)=>{
        dispatch({
            type:GET_SOAL_UJIAN,
            payload:{
                loading:true,
                data:false,
                errorMessage:false,
            }
        })
        await axios({
            method:'GET',
            url:`${URL_API}ujian/soal?id_ujian=${data.id_ujian}`,
            headers:{
                'Authorization': 'Bearer ' + data.token
            },
            timeout:12000
        })
        .then((response)=>{
            // console.log(response.data)
            dispatch({
                type:GET_SOAL_UJIAN,
                payload:{
                    loading:false,
                    data:response.data,
                    errorMessage:false,
                }
            })
        })
        .catch((error)=>{
            console.log(error)
            dispatch({
                type:GET_SOAL_UJIAN,
                payload:{
                    loading:false,
                    data:false,
                    errorMessage:error.response,
                }
            })
        })
    }
}