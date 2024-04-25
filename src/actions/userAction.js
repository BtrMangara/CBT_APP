import axios from "axios";
// import 'dotenv'

const URL_API = process.env.REACT_APP_API_KEY;

export const GET_LOGIN = 'GET_LOGIN';
export const GET_NISN = 'GET_NISN';

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
            // console.log(error.response.data.message)
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