import axios from 'axios'
import {SUBSCRIBE, GET_ERRORS,ON_LOADING} from './types'
import { Actions } from 'react-native-router-flux'
import {proxy} from './proxy'

export const SubScribe = id => dispatch => {
    // dispatch(onLoading())
    axios.post(`${proxy}/subscribe/${id}`)
     .then(data => {
         console.log(data)
         return
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