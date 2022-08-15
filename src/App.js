import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Todolist from './components/TodoList';
import EditTodo from './components/EditTodo';


function App() {

  const [todo, setTodo] = useState([
    {
      id:1,
      title: 'First todo',
      status: 1  // ожидает
    },
    {
      id:2,
      title: 'second todo',
      status: 2 // в процессе
    },
    {
      id:3,
      title: 'third todo',
      status: 3  // выполнено 
    }
  ])

  const [value, setValue] = useState('')
  const [editId,setId] = useState('')

  function EdTodo (editId) {
      setId(editId)
      let editTodo = todo.filter(item => item.id == editId)
      setValue(editTodo[0].title)
  }

  return (
    <div className="App">
      <Header />
      <div className='Wrapper'>
        <Todolist todo={todo} setTodo={setTodo} idTodo={EdTodo}/>
        <EditTodo editId={editId} setId={setId} todo={todo} setTodo={setTodo} value={value} setValue={setValue}/>
      </div>
    </div>
  );
}

export default App;
