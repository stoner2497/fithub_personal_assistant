import {GET_SUBSCRIBER_POST,ON_LOADING, GET_SUBSCRIBER_BLOG, GET_CONTACTS, GET_LIKES} from '../Actions/types'

const initialState = {
    contacts:[],
    posts:[],
    blogs:[],
    loading:false,
    likes:0
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
        case GET_SUBSCRIBER_BLOG:
            return {
                ...state,
                blogs:[action.payload],
                loading:false
            }
        case GET_CONTACTS:
            return {
                ...state,
                contacts:[action.payload],
                loading:false
            }
        case GET_LIKES:
            return {
                ...state,
                likes:action.payload
            }
        default:
            return state
    }
}