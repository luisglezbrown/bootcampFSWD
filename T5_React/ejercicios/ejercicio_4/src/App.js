import { useState } from "react";
import NewToDoInput from "./components/NewToDoInput";
import ToDoList from "./components/ToDoList";

function App() {

  const initialState = [
    {userId: 'Luis', title: 'Clase de Yoga', completed: false},
    {userId: 'Luis', title: 'Lavar el perro', completed: false},
    {userId: 'Luis', title: 'Cambiar el agua a la tortuga', completed: false}
  ];

  const [toDoList, setToDoList] = useState(initialState);

  return (
    <div className="App container">
      <h1 className='my-3'>Todo List</h1>
      <NewToDoInput />
      <ToDoList toDoList={toDoList} setToDoList={setToDoList} />
    </div>
  );
}

export default App;
