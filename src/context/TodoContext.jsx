import { createContext, useReducer, useState } from "react";
import TodoReducer from "./TodoReducer";

const TodoContext = createContext()

export const TodoProvider = ({children}) => {

  const initialState = {
    todos : [],
    edit : {
    
      todo : {},
      isEdit: false

    }
  }


   const[state , dispatch] = useReducer (TodoReducer, initialState)

      return (

        <TodoContext.Provider value = {{...state, dispatch }}>

            {children}
        </TodoContext.Provider>
    )

}


export default TodoContext