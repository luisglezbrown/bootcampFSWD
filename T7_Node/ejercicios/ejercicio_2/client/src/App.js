import { useState, useEffect } from "react";
import NewToDoInput from "./components/NewToDoInput";
import ToDoList from "./components/ToDoList";

function App() {

  const API = 'http://localhost:3002/todos';

  const [toDoList, setToDoList] = useState([]);

  useEffect(()=>{
      fetch(API)
      .then(response => response.json())
      .then(data => setToDoList(data.results));
  }, [toDoList]);


  return (
    <div className="App container">
      <h1 className='my-3'>Todo List</h1>
      <NewToDoInput toDoList={toDoList} setToDoList={setToDoList} />
      <ToDoList toDoList={toDoList} setToDoList={setToDoList} />
    </div>
  );
}

export default App;
