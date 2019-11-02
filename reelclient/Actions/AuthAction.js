import axios from 'axios';
import {EMAIL_CHANGED,PASSWORD_CHANGED,NAME_CHANGED,GET_ERRORS,TITLE_CHANGED, LOGIN_USER_SUCCESS, ON_LOADING,ON_LOADING_FALSE} from './types'
import AsyncStorage from '@react-native-community/async-storage';
import {  Actions } from 'react-native-router-flux'
import {ToastAndroid} from 'react-native';
import jwt_decode from 'jwt-decode';
import {proxy} from './proxy'

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
     axios.post(`${proxy}/register`,userData)
        .then(res => 
            {
                console.log(res.data)
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
    dispatch(onLoading())
    axios.post(`${proxy}/login`,userData)
        .then(res => {
            const {token} =  res.data
            AsyncStorage.setItem('jwttoken',token)
            setAuthToken(token)
            const decoded = jwt_decode(token)
            dispatch(setCurrentUser(decoded))
            Actions.newsfeed()
        }).catch(err => {
            dispatch({
                type:GET_ERRORS,
                payload:err
            })
        })
}

export const forgotPassword = userData => dispatch => {
    dispatch(onLoading())
    axios.post(`${proxy2}/forget-password`,userData)
        .then(() => {
            Actions.forgotpassword()
        })
}



export const onLoading = () => {
    return dispatch => {
        dispatch({
            type:ON_LOADING
        })
    }
}
export const onLoadingFalse = () => {
    return dispatch => {
        dispatch({
            type:ON_LOADING_FALSE
        })
    }
}

export const setCurrentUser = decoded => {
    return {
      type: LOGIN_USER_SUCCESS,
      payload: decoded
    };
  };
// Log user out
export const logoutUser = () => dispatch => {
    // Remove token from localStorage
    AsyncStorage.removeItem('jwttoken');
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
    Actions.landing()    
    
  };