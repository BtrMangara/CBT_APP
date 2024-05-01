import { GET_DAFTAR_UJIAN, GET_SOAL_UJIAN } from "../../actions/ujianAction";

const initialState={
    getDaftarUjianResult : false,
    getDaftarUjianLoading : false,
    getDaftarUjianError : false,

    getSoalUjianResult : false,
    getSoalUjianLoading : false,
    getSoalUjianError : false,
}

const ujian = (state = initialState,action)=>{
    switch (action.type) {
        case GET_DAFTAR_UJIAN:{
            // console.log(GET_DAFTAR_UJIAN,action)
            return{
                ...state,
                getDaftarUjianResult : action.payload.data,
                getDaftarUjianLoading : action.payload.loading,
                getDaftarUjianError : action.payload.errorMessage,
            }
        }

        case GET_SOAL_UJIAN:{
            return{
                ...state,
                getSoalUjianResult : action.payload.data,
                getSoalUjianLoading : action.payload.loading,
                getSoalUjianError : action.payload.errorMessage,
            }
        } 
    
        default:
            return state;
    }
}

export default ujian;