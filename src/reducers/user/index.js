import { GET_LOGIN, GET_NISN, REGISTER_SISWA } from "../../actions/userAction";

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
        default:
            return state;
    }
}

export default user;