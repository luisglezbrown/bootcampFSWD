import { useState } from 'react'
import { API_URL } from "../settings";

export default function NewToDoInput() {

  const [title, setTitle] = useState('');

  const handleTitle = event => setTitle(event.target.value);

  function submit (event) {
    event.preventDefault();
    fetch(API_URL, {
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
