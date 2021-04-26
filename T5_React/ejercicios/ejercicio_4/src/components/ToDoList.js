import React from 'react'

export default function ToDoList({toDoList, setToDoList}) {

    const completedToggle = (evento, index) => {
        const newToDoList = [...toDoList];
        newToDoList[index].completed = !newToDoList[index].completed;

        setToDoList(newToDoList);
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
                    <li className={toDo.completed? 'list-group-item list-group-item-secondary' : "list-group-item"} key={index} onClick={evento => completedToggle(evento, index)}>
                        {index+1} - {toDo.title}
                        <button className='btn btn-danger float-right' onClick={removeToDo(toDo.title)}>X</button>
                    </li>                                  
                )}
            </ul>
        </div>
    )
};
