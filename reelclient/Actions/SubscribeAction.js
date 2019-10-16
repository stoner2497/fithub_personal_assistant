import axios from 'axios'
import {SUBSCRIBE, GET_ERRORS,ON_LOADING} from './types'
import { Actions } from 'react-native-router-flux'


const proxy = 'http://192.168.1.10:5000'
const proxy2 = 'http://192.168.56.1:5000'

export const SubScribe = id => dispatch => {
    dispatch(onLoading())
    axios.post(`${proxy}/subscribe/${id}`)
     .then(data => {
         Actions.push('userProfile')
     }).catch(err => {
         dispatch({
             type:GET_ERRORS,
             payload:err.response.data
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