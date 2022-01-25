// set up datalayer 
// to avoid prop drilling

import React, { createContext,useContext, useReducer} from "react"

// This is the data layer
export const StateContext = createContext();

//provider- wrap our entire app inside the provider and give it access to our datalayer that we created

export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue =() => useContext(StateContext)