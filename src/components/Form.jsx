import React ,{useEffect, useState} from 'react'


const Form = ({addTodo, edit, updateTodo}) => {


    const [text , setText] = useState("")

     const handleSubmit = (e) =>{
        e.preventDefault()
        !edit.isEdit ?
        addTodo( {id : crypto.randomUUID() , text}):
         updateTodo({id: edit.todo.id , text })
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