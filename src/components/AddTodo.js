import React, {useState} from 'react'

export default function AddTodo({todo,setTodo}) {
    
    const [value, setValue] = useState('')

    function saveTodo() {
        console.log(todo)
        setTodo(
            [...todo,{
                id: todo.length + 1,
                title: value
            }]
        )
        console.log(todo)
        setValue('')
    }
    return (
        <div>
            <input placeholder='Enter ToDo' value={value} onChange={ (e) => setValue(e.target.value)} />
            <button onClick={saveTodo}>Добавить</button>
        </div>
    )
}
