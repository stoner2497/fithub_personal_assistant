import axios from 'axios'
import {SUBSCRIBE, GET_ERRORS,ON_LOADING} from './types'

export const SubScribe = id => dispatch => {
    dispatch(onLoading())
    axios.post(`http://192.168.1.10:5000/subscribe/${id}`)
     .then(data => {
         console.log(data)
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