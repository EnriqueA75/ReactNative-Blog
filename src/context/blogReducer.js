import { DELETE_BLOGPOST, EDIT_BLOGPOST, GET_BLOGPOST } from '../../types'

export default (state, action) => {
    switch(action.type){            
        case DELETE_BLOGPOST:
            return {
                ...state,
                blogPosts: state.blogPosts.filter((blogPost) => blogPost.id !== action.payload)
            }  

        case EDIT_BLOGPOST:
            return {
                blogPosts: state.blogPosts.map((blogPost) => {
                    return blogPost.id === action.payload.id ? action.payload : blogPost
                })
            }
        case GET_BLOGPOST: 
            return {
                ...state,
                blogPosts: action.payload
            } 
        default:
            return state
        }
    }