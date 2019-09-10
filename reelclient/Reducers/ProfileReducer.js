import { GET_ERRORS, GET_ACCOUNT, ON_LOADING,GET_ACCOUNTS } from '../Actions/types';



const initialState = {
    currentProfile:'',
    profiles:{},
    profile:{},
    error:{},
    loading:false
}

export default function(state = initialState,action) {
    console.log(action.payload)
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
        case GET_ACCOUNTS:
            return {
                ...state,
                profiles:action.payload
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