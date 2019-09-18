import { SEARCH_ACCOUNT } from './types'
import axios from 'axios'

export const searchResults = search => dispatch => {
    axios({
        method: 'post',
        url: 'http://192.168.1.10:5000/search',
        data: {
            search:search
        }
      }).then(res => 
        dispatch({
            type:SEARCH_ACCOUNT,
            payload:res.data
        })
        )
      .catch(err => console.log(err))
}