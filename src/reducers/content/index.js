import { GET_BERITA } from "../../actions/userAction";

const initialState ={
    getBeritaResult : false,
    getBeritaLoading : false,
    getBeritaError : false,
}

const content = (state=initialState,action)=>{
    switch(action.type){
        case GET_BERITA:
            return{
                ...state,
                getBeritaResult:action.payload.data,
                getBeritaLoading:action.payload.Loading,
                getBeritaError:action.payload.errorMessage,
            }

        default:
            return state;
    }

}

export default content;