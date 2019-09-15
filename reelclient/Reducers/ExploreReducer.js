import { SEARCH_ACCOUNT } from '../Actions/types'

const initialState = {
    searchResult : {}
}

export default function (state=initialState,action) {
    switch(action.type) {
        case SEARCH_ACCOUNT:
            return {
                ...state,
                searchResult:action.payload
            }
        default:
            return state
    }
}