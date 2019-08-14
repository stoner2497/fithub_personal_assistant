import axios from 'axios';
import {EMAIL_CHANGED,PASSWORD_CHANGED,NAME_CHANGED,GET_ERRORS,TITLE_CHANGED} from './types'
import {  Actions } from 'react-native-router-flux'

export const emailChanged = (text) => {
    return {
        type:EMAIL_CHANGED,
        payload:text
    }
}
export const passwordChanged = (text) => {
    return {
        type:PASSWORD_CHANGED,
        payload:text
    }
}
export const nameChanged = (text) => {
    return {
        type:NAME_CHANGED,
        payload:text
    }
}
export const titleChanged = (text) => {
    return {
        type:TITLE_CHANGED,
        payload:text
    }
}

export const RegisterUser = userData => dispatch => {
    return axios.post('/register',userData)
        .then(res => Actions.login)
        .catch(err => {
            console.log(err)
            dispatch({
                type:GET_ERRORS,
                payload:err
            })
        })
    }
