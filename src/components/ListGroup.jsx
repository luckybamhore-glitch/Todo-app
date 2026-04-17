import React, { useContext } from 'react'
import ListItems from './ListItems' 
import TodoContext from '../context/TodoContext'


const ListGroup = () => {
 
  const {todos} = useContext(TodoContext)


  return (
    
      <ul className='my-8'>
      
           {todos.map(todo => <ListItems key={todo.id} todo={todo}/>)}
      </ul>
    
  )
}

export default ListGroup;



 

