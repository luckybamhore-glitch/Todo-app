import React, { useState } from 'react'
import ListItems from './ListItems'

const practice = () => {
  return (
    <div>practice</div>
  )
}

const [todos , setTodos] = useState([
  {id : 1,
    text: "Sample text"
  }  
])

// {todos.map(todo => <ListItems key={todo.id} todo ={todo} removeTodo={removeTodo} />

const addTodo = (newTodo) =>{
 setTodos([newTodo, ...todos])
}

const handleSubmit = (e) =>{
    e.preventDefault()

    addTodo( {id : crypto.randomUUID(), text})
}

<form onSubmit={handleSubmit}/>
,<input onChange={(e)=> setText(e.target.value)}/>


const removeTodo = (id) => {
    setTodos(todos.filter((todo)=>todo.id !==id))
}

<button onClick={()=> removeTodo(todo.id)}>Delete</button>

const [edit ,setEdit] = useState({
    todo:{}
    isEdit:False,
})

const editTodo = (todo) =>{
setEdit({
    todo: todo,
    isEdit: True,
})

}


)}

export default practice