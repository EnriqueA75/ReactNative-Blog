import React, { useReducer, createContext } from 'react'

export default (reducer, actions, initialState) => {
    const Context = createContext()

    const Provider = ({children}) => {
        const [state, dispatch] = useReducer(reducer, initialState)

        //action === {addBlogPost: (dispatch) => {return () => {} }} 
         const boundActions = {}
         for (let key in actions){
             //key === 'addBlogPost'
             boundActions[key] = actions[key](dispatch)
         }

        return (
            <Context.Provider
                value={{
                    state: state,
                    ...boundActions
                }}
            >
                {children}
            </Context.Provider>
        )
    }
    return {Context, Provider}
}