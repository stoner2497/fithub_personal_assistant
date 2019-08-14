import axios from 'axios';
import {EMAIL_CHANGED,PASSWORD_CHANGED,NAME_CHANGED,GET_ERRORS,TITLE_CHANGED, LOGIN_USER_SUCCESS} from './types'
import AsyncStorage from '@react-native-community/async-storage';
import {  Actions } from 'react-native-router-flux'
import {ToastAndroid} from 'react-native';
import jwt_decode from 'jwt-decode';

import setAuthToken from '../utils/setAuthToken'

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
     axios.post('http://192.168.1.10:5000/register',userData)
        .then(res => 
            {
                ToastAndroid.show('Registerd Successfully', ToastAndroid.SHORT);
                Actions.login()
            })
        .catch(err => {
            console.log(err)
            dispatch({
                type:GET_ERRORS,
                payload:err
            })
        })
    }

export const LoginUser = userData => dispatch => {
    axios.post('http://192.168.1.10:5000/login',userData)
        .then(res => {
            const {token} =  res.data
            AsyncStorage.setItem('jwttoken',token)
            setAuthToken(token)
            const decoded = jwt_decode(token)
            dispatch(setCurrentUser(decoded))
            Actions.main()
        })  
}

export const setCurrentUser = decoded => {
    return {
      type: LOGIN_USER_SUCCESS,
      payload: decoded
    };
  };