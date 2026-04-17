import React ,{useContext, useEffect, useState} from 'react'
import TodoContext from '../context/TodoContext';


const Form = () => {

   const  {dispatch, edit, updateTodo} = useContext(TodoContext)


    const [text , setText] = useState("")

     const handleSubmit = (e) =>{
        e.preventDefault()


        !edit.isEdit ?
        dispatch({
         type: "ADD_TODO",
         payload: {id : crypto.randomUUID() , text}
        }):

         dispatch({
            type : "UPDATE_TODO",
            payload : {id: edit.todo.id , text }
         })
        setText("")
     }

     useEffect(() =>{
        setText(edit.todo.text)
     }, [edit])

    return (
        <div>
           <form onSubmit={handleSubmit} className='border border-gray-400 p-6 rounded-lg'>
        <input value={text} onChange={(e) => setText(e.target.value)} type="text" className='border border-gray-400 w-full rounded-sm p-2' placeholder='Enter Text' required />
        <button className='bg-green-500 w-full rounded-lg cursor-pointer hover:bg-green-600 mt-4 p-2'>Save</button>
      </form>  
        </div>
    );
};

export default Form;


// import React, { useState } from "react";

// const Form = ({ addTodo }) => {
//   const [text, setText] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!text.trim()) return;

//     addTodo({
//       id: crypto.randomUUID(),
//       text,
//     });

//     setText("");
//   };

//   return (
//     <form onSubmit={handleSubmit} className="border p-4 mb-4">
//       <input
//         type="text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         className="border p-2 w-full mb-2"
//         placeholder="Enter todo..."
//       />

//       <button className="bg-green-500 text-white w-full p-2 rounded">
//         Add Todo
//       </button>
//     </form>
//   );
// };

// export default Form;