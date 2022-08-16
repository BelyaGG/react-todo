import React, { useState } from 'react'
import ItemTodo from './ItemTodo';
import './TodoList.css';

export default function Todolist({todo, setTodo, idTodo}) {

  const [value , setValue] = useState('');


  function editTodo(editId) { // функция для передачи данных родителю (передаем id родителю)
    idTodo(editId);
  }


  return (
    <div className='TodoList'>
      <div> 
        <input className='SearchInput' placeholder='Search ToDo 🍳'  value={ value } onChange={ (e) => setValue(e.target.value)} />
      </div>
      <div className='TodoItems'>

        {
          value < 1 ? 
            todo.map(item =>(
              <ItemTodo item={item} todo={todo} setTodo={setTodo} editTodo={editTodo} />
            )):
            todo.filter(item => item.title.toLowerCase().includes(value.toLowerCase())).map(item => (
              <ItemTodo item={item} todo={todo} setTodo={setTodo} editTodo={editTodo} />
          ))
        }
        </div>
    </div>
  )
}
