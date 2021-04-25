import React from 'react'

export default function ToDoList({toDoList, setToDoList}) {

    const completedToggle = evento => {
        evento.target.classList.toggle('list-group-item-secondary');
    };

    const removeToDo = title => {
        return evento => {
        setToDoList(toDoList.filter(toDo => toDo.title !== title))}
    };

    return (
        <div>
            <ul class="list-group mb-5">
                {toDoList.map((toDo, index) => 
                    // eslint-disable-next-line no-undef
                    <li className={toDo.completed? 'list-group-item list-group-item-secondary' : "list-group-item"} key={index} onClick={completedToggle}>
                        {index+1} - {toDo.title}
                        <button className='btn btn-danger float-right' onClick={removeToDo(toDo.title)}>X</button>
                    </li>                                  
                )}
            </ul>
        </div>
    )
};
