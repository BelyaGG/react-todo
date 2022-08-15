import React, { useState } from 'react'

export default function Todolist({todo, setTodo, idTodo}) {

  const [value , setValue] = useState('');

  function deleteTodo (id) {
      let newTodo = [...todo].filter(item=> item.id !== id)
      setTodo(newTodo)
  }

  function editTodo(editId) {
    idTodo(editId);
  }

  function endTodo (id) {
    [...todo].map(item => {
      if (item.id === id){
        if (item.status === 1 || 2 ) {
          item.status = 3
          
        } else {
          item.status = 1
        }
      }
    })
    console.log(todo)
  }

  return (
    <div className='TodoList'>
      <div> 
        <input placeholder='Search ToDo' value={ value } onChange={ (e) => setValue(e.target.value)} />
      </div>
      <div className='TodoItems'>

        {
          value < 1 ? 
            todo.map(item =>(
              <div className={`TodoItem ${item.status === 1 ? 'waitTodo' : item.status === 2 ? 'progressTodo' : 'endTodo'}`} onClick={()=> endTodo(item.id)}> 
                <div className='TodoTitle'> {item.title} </div> 
                <div> {item.status}</div>
                <button onClick={()=>deleteTodo(item.id)}>Удалить</button>
                <button onClick={()=>editTodo(item.id)}>Редактировать</button>
              </div>
            ) ):
            todo.filter(item => item.title.toLowerCase().includes(value.toLowerCase())).map(item => (
              <div className='TodoItem'> 
                <div className='TodoTitle'> {item.title} </div> 
                <div> {item.status}</div>
                <button onClick={()=>deleteTodo(item.id)}>Удалить</button>
                <button onClick={()=>editTodo(item.id)}>Редактировать</button>
              </div>
          ))
        }
        </div>
    </div>
  )
}
