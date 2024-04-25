import { GET_LOGIN, GET_NISN } from "../../actions/userAction";

const initialState={
    getLoginResult : false,
    getLoginLoading : false,
    getLoginError : false,

    getNisnResult:false,
    getNisnLoading:false,
    getNisnError:false,
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
                getNisnError:action.payload.errorMessage
            }
        default:
            return state;
    }
}

export default user;