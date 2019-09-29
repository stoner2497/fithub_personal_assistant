import {GET_SUBSCRIBER_POST,ON_LOADING} from '../Actions/types'

const initialState = {
    posts:[],
    blogs:[],
    loading:false
}

export default function (state=initialState , action) {
    console.log(action.payload)
    switch(action.type) {
        case ON_LOADING:
            return {
                loading:true
            }
        case GET_SUBSCRIBER_POST:
            return {
                ...state,
                posts:[action.payload],
                loading:false
            }
        default:
            return state
    }
}