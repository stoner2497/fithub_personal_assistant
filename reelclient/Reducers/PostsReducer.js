import {GET_SUBSCRIBER_POST,ON_LOADING, GET_SUBSCRIBER_BLOG, GET_CONTACTS, GET_LIKES} from '../Actions/types'

const initialState = {
    contacts:[],
    posts:[],
    blogs:[],
    loading:false,
    likes:0
}

 Likehelper =  (post,state) => {
     console.log(post)
    console.log(state)
    posts = state.flatMap(post => {
        return post.flatMap(post => {
            return post
        })
    } ) 
    console.log(posts.User)
    let index = posts.findIndex(i => i._id === post._id)
    console.log(index)
    console.log(post.likes)
    console.log(posts[index].likes)
    posts[index].likes = post.likes
    console.log(posts)
    return posts
}


export default function (state=initialState , action) {
    switch(action.type) {
        case ON_LOADING:
            return {
                loading:true
            }
        case GET_SUBSCRIBER_POST:
            return {
                ...state,
                posts:[action.payload],
                loading:false
            }
        case GET_SUBSCRIBER_BLOG:
            return {
                ...state,
                blogs:[action.payload],
                loading:false
            }
        case GET_CONTACTS:
            return {
                ...state,
                contacts:[action.payload],
                loading:false
            }
        case GET_LIKES:
            return {
                ...state,
                posts:[Likehelper(action.payload,...state.posts)]
            }
        default:
            return state
    }
}