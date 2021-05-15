import React from 'react'
import './ToDoList.css'

export default function ToDoList({toDoList}) {

    const completedToggle = (evento, id, completed) => {
        if (evento.target.tagName !== 'BUTTON'){
            const API = 'http://localhost:3002/todos/' + id;
            
            fetch(API, {
            method: "PUT",
            body: JSON.stringify({"completed": !completed}),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then(response => response.json()) 
        .then(json => console.log(json));
        }
    };

    const removeToDo = id => {
        const API = 'http://localhost:3002/todos/' + id;

        fetch(API, {
            method: "DELETE",
            body: JSON.stringify(),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then(response => response.json()) 
        .then(json => console.log(json));
    };

    return (
        <div>
            <ul className="list-group mb-5">
                {toDoList?.map((toDo, index) => toDo.active &&
                    <li className={`list-group-item ${toDo.completed && 'list-group-item-secondary completed' }`}  key={toDo._id} onClick={evento => completedToggle(evento, toDo._id, toDo.completed)}>
                        {`${index+1}: ${toDo.title}`}
                        {<button className='btn btn-danger float-right' onClick={() => removeToDo(toDo._id)}>X</button>}
                    </li>                                  
                )}
            </ul>
        </div>
    )
}
