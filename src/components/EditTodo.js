import React from 'react'

export default function EditTodo({editId, setId, todo, setTodo, value , setValue} ) {


  function saveTodo() {
      setTodo(
          [...todo,{
              id: todo.length + 1,
              title: value,
              status: 1
          }]
      )
      setValue('')
  }
  


  function saveEditTodo() {
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
