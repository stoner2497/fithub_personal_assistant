import { SEARCH_ACCOUNT } from './types'
import axios from 'axios'

export const searchResults = (userdata) => {
    return dispatch => {
        axios.post('http://192.168.1.10:5000/search',userdata)
         .then(res => {
            dispatch({
                type:SEARCH_ACCOUNT,
                payload:res.data
            })
         }).catch(err => {
             console.log(err)
         })
    }
}