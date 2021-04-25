import React, { useState } from 'react'

export default function NewToDoInput({toDoList, setToDoList}) {

  const [title, setTitle] = useState('');

  const handleTitle = evento => setTitle(evento.target.value);

  function submit (evento) {
      evento.preventDefault();

      const newTask = {
        title: title, 
        completed: false
      }

      setToDoList([newTask, ...toDoList]);

      setTitle('');
  }

  return (
        <form onSubmit={submit}>
            <input className='form-control my-4' type='text' onChange={handleTitle} placeholder='Introduce un nuevo To-do'></input>
        </form>
    )
}
