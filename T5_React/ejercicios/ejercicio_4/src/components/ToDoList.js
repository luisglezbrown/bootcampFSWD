import React from 'react'

export default function ToDoList({toDoList, setToDoList}) {

    const completedToggle = (evento, index) => {
        setToDoList(!toDoList[index].completed) };

    return (
        <div>
            <ul class="list-group">
                {toDoList.map((toDo, index) => 
                    <li className="list-group-item" onClick={completedToggle(index)} >
                        {index}: {toDo.title}
                        <button className='btn btn-danger float-right'>X</button>
                    </li>                                  
                )}
            </ul>
        </div>
    )
}
