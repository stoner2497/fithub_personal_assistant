import { GET_ERRORS, GET_ACCOUNT, ON_LOADING } from '../Actions/types';


const initialState = {
    currentProfile:'',
    profiles:{},
    profile:{},
    error:{},
    loading:false
}

export default function(state = initialState,action) {
    switch(action.type){
        case ON_LOADING:
            return {
                ...state,
                loading:true
            }
        case GET_ACCOUNT:
            return {
                ...state,
                profile:action.payload
            }
        case GET_ERRORS:
            return {
                ...state,
                error:action.payload
            }
        default:
            return state
    }
}