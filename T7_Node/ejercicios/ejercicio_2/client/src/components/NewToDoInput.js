import React, { useState } from 'react'

export default function NewToDoInput() {

  const [title, setTitle] = useState('');

  const handleTitle = evento => setTitle(evento.target.value);

  function submit (evento) {
    evento.preventDefault();
    const API = 'http://localhost:3002/todos';

    fetch(API, {
      method: "POST",
      body: JSON.stringify({"title": title}),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json()) 
    .then(json => console.log(json));

    setTitle('');
  }

  return (
        <form onSubmit={submit}>
          <input  className='form-control my-4' 
                  type='text' 
                  onChange={handleTitle} 
                  placeholder='Introduce un nuevo To-do'
                  value ={title}>
          </input>
        </form>
    )
}
