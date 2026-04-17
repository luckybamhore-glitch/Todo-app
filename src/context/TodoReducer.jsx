const TodoReducer = (state , action) => {

    switch(action.type){


        case "ADD_TODO":
        return{
            ...state,
            todos : [action.payload, ...state.todos]  
        }

        case "REMOVE_TODO":
            return {
                ...state,
                todos : state.todos.filter (todo => todo.id !== action.payload)
            }

        case "EDIT_TODO" :
            return {
                ...state,
                edit :{
                 todo : action.payload,
                isEdit  : true
                } 
            }
        case "UPDATE_TODO" :
            return {
                ...state,
                todos : state.todos.map(todo => todo.id === action.payload.id ? action.payload : todo),
                edit :{
                 todo :{},
                isEdit  : false
                } 
            }
    }



}

export default TodoReducer