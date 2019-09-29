import axios from 'axios'
import { GET_SUBSCRIBER_POST,ON_LOADING } from './types'


export const getSubscriberPost = () => {
    return dispatch => {
        dispatch(onLoading())
        axios.get('http://192.168.1.10:5000/newsfeed/posts')
         .then(res => {
             dispatch({
                 type:GET_SUBSCRIBER_POST,
                 payload:res.data
             })
         }).catch(err => {
             console.log(err)
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