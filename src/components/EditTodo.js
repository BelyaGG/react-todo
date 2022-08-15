import React from 'react';
import { v4 as uuid } from 'uuid';
import './EditTodo.css'

export default function EditTodo({editId, setId, todo, setTodo, value , setValue} ) {


  function saveTodo() { // в обновление состояния кидаем наш старый массив плюс новое добавляем наш новый объект  
      setTodo(
          [...todo,{
              id: uuid(),
              title: value,
              status: 1
          }]
      )
      setValue('')
  }
  


  function saveEditTodo() { // проходимся по массиву и если совподают id то значение value заносим в item.tiile. После чего обновляем состояния 
    let newTodo = [...todo].map(item => {
      if (item.id === editId) {
        item.title = value
      }
      return item
    }) 
    setTodo(newTodo) 
    setValue('')
    setId('')
  }

  return (
    <div className='EditTodo'>

      { editId < 1 ? 
        <div>
          <input placeholder='Enter ToDo' value={value} onChange={ (e) => setValue(e.target.value)} />
          <button onClick={saveTodo}>Добавить</button>
        </div> :
        <div> 
          <input placeholder='Enter ToDo' value={ value } onChange={ (e) => setValue(e.target.value)} />
          <button onClick={saveEditTodo}>Сохранить</button>
        </div>
      }

    </div>

  )
}
