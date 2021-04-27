import { useState, useEffect } from "react";
import NewToDoInput from "../components/NewToDoInput";
import ToDoList from "../components/ToDoList";

function Ejercicio4() {

  const API = 'https://raw.githubusercontent.com/BC-FSWD/todo-list/master/todo-list.json';

  const [toDoList, setToDoList] = useState([]);

  useEffect(()=>{
      fetch(API)
      .then(response => response.json())
      .then(data => setToDoList(data.slice(0, 20)));
  }, []);


  return (
    <div className="App container">
      <h1 className='my-3'>Todo List</h1>
      <NewToDoInput toDoList={toDoList} setToDoList={setToDoList} />
      <ToDoList toDoList={toDoList} setToDoList={setToDoList} />
    </div>
  );
}

export default Ejercicio4;
