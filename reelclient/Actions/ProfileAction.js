import axios from 'axios';
import {GET_ACCOUNT,GET_ACCOUNTS, GET_ERRORS, ON_LOADING} from './types'
import { Actions } from 'react-native-router-flux';

export const newAccount = userdata => dispatch => {
    axios.post('http://192.168.1.10:5000/userAccount',userdata)
        .then(() => {
            Actions.profile()
        })
        .catch(err => {
            dispatch({
                type:GET_ERRORS,
                payload:err.response.data
            })
        })
}
export const getAccount = dispatch => {
    axios.get('http://192.168.1.10:5000/userAccount')
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
        })
}
export const onLoading = () => {
    return dispatch => {
        dispatch({
            type:ON_LOADING
        })
    }
}