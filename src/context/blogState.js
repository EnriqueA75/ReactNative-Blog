import React, { useReducer } from 'react'
import blogReducer from './blogReducer'
import blogContext from './blogContext'
import jsonServer from '../api/jsonServer'
import { DELETE_BLOGPOST, EDIT_BLOGPOST, GET_BLOGPOST } from '../../types'

const BlogState = ({ children }) => {

    const initialState = {
        blogPosts: []
    }

    const [state, dispatch] = useReducer(blogReducer, initialState)
        
    const getBlogPost = async () => {
        try {
            const response = await jsonServer.get('/blogposts')
            dispatch({
                type: GET_BLOGPOST,
                payload: response.data
            })
        } catch (error) {
            console.log(error)
        }

    }
    const addBlogPost = async (title, content, callback) => {
        try {
            await jsonServer.post('/blogposts', {title, content})
            if(callback){
                callback()
            }
        } catch (error) {
            console.log(error)
        }
    }
    const deleteBlogPost = async (id) => {
        try {
            await jsonServer.delete(`/blogposts/${id}`)
            dispatch({
                type: DELETE_BLOGPOST,
                payload: id
            })
        } catch (error) {
            console.log(error)
        }
    }
    const editBlogPost = async (id, title, content, callback) => {
        try {
            await jsonServer.put(`/blogposts/${id}`, {title, content})
            dispatch({
                type: EDIT_BLOGPOST,
                payload: {id, title, content}
            })
            if(callback){
                callback()
            }
        } catch (error) {
            
        }
    }

    return (
        <blogContext.Provider
            value={{
                blogPosts: state.blogPosts,
                // ...boundActions,
                getBlogPost,
                addBlogPost,
                deleteBlogPost,
                editBlogPost
            }}
        >
            {children}
        </blogContext.Provider>
    )
}
export default BlogState