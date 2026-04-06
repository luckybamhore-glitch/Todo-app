import React from 'react'
import ListItems from './ListItems' 


const ListGroup = ({todos , removeTodo, editTodo,}) => {
  return (
    
      <ul className='my-8'>
      
           {todos.map(todo => <ListItems key={todo.id} todo={todo} removeTodo={removeTodo} editTodo={editTodo}/>)}
      </ul>
    
  )
}

export default ListGroup