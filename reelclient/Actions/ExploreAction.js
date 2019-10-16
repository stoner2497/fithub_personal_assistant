import { SEARCH_ACCOUNT } from './types'
import axios from 'axios'


const proxy = 'http://192.168.1.10:5000'
const proxy2 = 'http://192.168.56.1:5000'



export const searchResults = search => dispatch => {
    axios({
        method: 'post',
        url: `${proxy}/search`,
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