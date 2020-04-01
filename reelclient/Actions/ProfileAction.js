import axios from 'axios';
import {GET_ACCOUNT,GET_ACCOUNTS, GET_ERRORS, ON_LOADING, GET_SPECIFIC} from './types'
import { Actions } from 'react-native-router-flux';
import {ToastAndroid,Platform} from 'react-native'
import {proxy} from './proxy'

createFormData = (photo, body) => {
    let data = new FormData();
    data.append("avatar", {
      name: photo.fileName,
      type: photo.type,
      uri:
        Platform.OS === "android" ? photo.uri : photo.uri.replace("file://", "")
    });
  
    Object.keys(body).forEach(key => {
      data.append(key, body[key]);
    });
  
    return data
  };

 
export const newAccount = (avatar,userdata) => dispatch => { 
axios(`${proxy}/useraccount`, {
    method: "POST",
    data: createFormData(avatar,  userdata )
  })
  .then(res => {
                console.log(res)
                Actions.push('profile')
                ToastAndroid.show('succesfully created account',ToastAndroid.LONG)
    
            })
            .catch(err => { 
                console.log(err)
                dispatch({
                    type:GET_ERRORS,
                    payload:err
                })
            })
};


export const getAccount = () => {
    return dispatch => {
        dispatch(onLoading())
        axios.get(`${proxy}/useraccount`)
        .then(useraccount => {
            dispatch({
                type:GET_ACCOUNT,
                payload:useraccount.data
            })
        }).catch(err => {
            dispatch({
                type:GET_ERRORS,
                payload:err
            })
        })}
}

export const getAccounts  = () => {
    return dispatch => {
        dispatch(onLoading())
        axios.get(`${proxy}/useraccount/all`)
        .then(users => {
            dispatch({
                type:GET_ACCOUNTS,
                payload:users.data
            })
        }).catch(err => {
            dispatch({
                type:GET_ERRORS,
                payload:err
            })

        })
    }
}

export const getUserAccount = (id) => {
    return dispatch => {
        dispatch(onLoading())
        axios.get(`${proxy}/useraccount/${id}`)
            .then(res => {
                dispatch({
                    type:GET_SPECIFIC,
                    payload:res.data
                })
            })
    }
}

export const onLoading = () => {
    return dispatch => {
        dispatch({
            type:ON_LOADING
        })
    }
}