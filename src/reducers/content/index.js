import { GET_BERITA, GET_PENGUMUMAN } from "../../actions/userAction";

const initialState ={
    getBeritaResult : false,
    getBeritaLoading : false,
    getBeritaError : false,

    getPengumumanResult:false,
    getPengumumanLoading:false,
    getPengumumanError:false,
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

        case GET_PENGUMUMAN:
            return{
                ...state,
                getPengumumanResult:action.payload.data,
                getPengumumanLoading:action.payload.Loading,
                getPengumumanError:action.payload.errorMessage,
            }

        default:
            return state;
    }

}

export default content;