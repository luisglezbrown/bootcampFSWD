import { API_URL } from "../settings";
import './ToDoList.css'

export default function ToDoList({toDoList}) {

    const completedToggle = (event, id, completed) => {
        if (event.target.tagName !== 'BUTTON'){
            fetch(API_URL + id, {
            method: "PUT",
            body: JSON.stringify({"completed": !completed}),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then(response => response.json()) 
        .then(json => console.log(json));
        }
    };

    const removeToDo = id => {
        fetch(API_URL + id, {
            method: "DELETE",
            body: JSON.stringify(),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        })
        .then(response => response.json()) 
        .then(json => console.log(json));
    };

    return (
        <ul className="list-group mb-5">
            {toDoList?.map((toDo, index) => toDo.active &&
                <li className={`list-group-item ${toDo.completed && 'list-group-item-secondary completed'}`}  
                    key={toDo._id} 
                    onClick={event => completedToggle(event, toDo._id, toDo.completed)}>
                        {`${index+1}: ${toDo.title}`}
                        {<button className='btn btn-danger float-right' onClick={() => removeToDo(toDo._id)}>X</button>}
                </li>                                  
            )}
        </ul>

    )
}
