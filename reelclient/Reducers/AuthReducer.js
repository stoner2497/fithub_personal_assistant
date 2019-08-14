import {EMAIL_CHANGED,GET_ERRORS,PASSWORD_CHANGED,ON_LOADING,LOGIN_USER_SUCCESS,LOGIN_USER_FAILURE,NAME_CHANGED,TITLE_CHANGED} from '../Actions/types'



initialState = {
    authenticated:false,
    email:"",
    password:"",
    name:"",
    title:"",
    user:{},
    loading:false,
    errors:{}
}

export default (state = initialState,action) => {
    console.log(action.payload)
    switch(action.type) {
        case EMAIL_CHANGED:
            return {
                ...state,
                email:action.payload
            }
        case TITLE_CHANGED:
            return {
                ...state,
                title:action.payload
            }
        case PASSWORD_CHANGED:
            return {
                ...state,
                password:action.payload
            }
        case NAME_CHANGED:
            return {
                ...state,
                name:action.payload
            }
        case ON_LOADING:
            return {
                ...state,
                loading:true,
                error:''
            }
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                loading:false,
                user:action.payload,
                authenticated:true,
                error:'',
                
            }
        case LOGIN_USER_FAILURE:
            return {
                ...state,
                errors:action.payload,
                password:'',
                loading:false
            }
        case GET_ERRORS:
            return {
                ...state,
                errors:action.payload,
                loading:false
            }
        default:
            return state
    }
}