import React from 'react'

const ListItems = ({todo , removeTodo, editTodo, }) => {
    return (
        <div>

             <li className='my-2 border border-gray-400 p-2 flex items-center justify-between rounded-lg'>
          <div>
            <p className='text-xs my-2 text-gray-600'>#{todo.id}</p>
          <h1 className='text-xl font-semibold my-2'>{todo.text}</h1>
          </div>
          <div>
            <button onClick={() => editTodo(todo)} className='bg-yellow-400 px-4 py-2 hover:bg-yellow-600 mx-2 rounded-sm'>Edit</button>
            <button onClick={() => removeTodo(todo.id)} className='bg-red-400 px-4 py-2 hover:bg-red-600 rounded-sm'>Delete</button>
          </div>
        </li>
        </div>
    )
}

export default ListItems