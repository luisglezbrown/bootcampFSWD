import { useState, useEffect } from "react";
import NewToDoInput from "./components/NewToDoInput";
import ToDoList from "./components/ToDoList";
import { API_URL } from "./settings";

function App() {

  const [toDoList, setToDoList] = useState([]);

  useEffect(()=>{
      fetch(API_URL)
      .then(response => response.json())
      .then(data => setToDoList(data.results));
  }, [toDoList]);

  return (
    <div className="App container">
      <h1 className='my-3'>Todo List</h1>
      <NewToDoInput />
      <ToDoList toDoList={toDoList} />
    </div>
  );
}

export default App;
