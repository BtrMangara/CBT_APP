import { GET_BIODATA, GET_LOGIN, GET_NISN, REGISTER_SISWA, VERIFIKASI_EMAIL } from "../../actions/userAction";

const initialState={
    getLoginResult : false,
    getLoginLoading : false,
    getLoginError : false,

    getNisnResult:false,
    getNisnLoading:false,
    getNisnError:false,

    getRegistrasiSiswaResult:false,
    getRegistrasiSiswaLoading:false,
    getRegistrasiSiswaError:false,

    getVerifikasiEmailResult:false,
    getVerifikasiEmailLoading:false,
    getVerifikasiEmailError:false,

    getBiodataResult:false,
    getBiodataLoading:false,
    getBiodataError:false,
}

const user = (state = initialState,action)=>{
    switch(action.type){
        case GET_LOGIN:
            return{
                ...state,
                getLoginResult:action.payload.data,
                getLoginLoading:action.payload.Loading,
                getLoginError:action.payload.errorMessage
            }
        case GET_NISN:
            // console.log(GET_NISN, action)
            return{
                ...state,
                getNisnResult:action.payload.data,
                getNisnLoading:action.payload.Loading,
                getNisnError:action.payload.errorMessage,
            }
        case REGISTER_SISWA:
            return{
                ...state,
                getRegistrasiSiswaResult:action.payload.data,
                getRegistrasiSiswaLoading:action.payload.Loading,
                getRegistrasiSiswaError:action.payload.errorMessage,
            }
        case VERIFIKASI_EMAIL:
            // console.log(VERIFIKASI_EMAIL,action)
            return{
                ...state,
                getVerifikasiEmailResult:action.payload.data,
                getVerifikasiEmailLoading:action.payload.Loading,
                getVerifikasiEmailError:action.payload.errorMessage,
            }

        case GET_BIODATA :
            return{
                ...state,
                getBiodataResult:action.payload.data,
                getBiodataLoading:action.payload.Loading,
                getBiodataError:action.payload.errorMessage,
            }
        default:
            return state;
    }
}

export default user;