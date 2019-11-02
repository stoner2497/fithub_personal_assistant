import { SEARCH_ACCOUNT } from './types'
import axios from 'axios'

import {proxy} from './proxy'


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