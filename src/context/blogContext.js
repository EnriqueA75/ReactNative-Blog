import React, { createContext } from 'react'

const blogContext = createContext()

export const BlogProvider = ({children}) => {

    const blogPosts = [
        {title: 'Blog Post #1'},
        {title: 'Blog Post #2'},
        {title: 'Blog Post #3'},
    ]

    return (
        <blogContext.Provider
            value={
                blogPosts
            }
        >
            {children}
        </blogContext.Provider>
    )
}
export default blogContext