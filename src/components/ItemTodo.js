import React from 'react'
import './ItemTodo.css';

export default function ItemTodo({ item, todo, setTodo, editTodo }) {

    function endTodo (id) {  // проходимся по массиву , если id совподает с item.id , то смортим его стасус . Если стасус 3 (завершеное) делаем статус 1 (в ожидании). И наоборот. После чего обновляем состояние
        let endTodo = [...todo].map(item => {
          if (item.id === id){
            if (item.status === 3 ) {
              item.status = 1
              
            } else {
              item.status = 3
            }
          }
          return item
        })
        setTodo(endTodo)
    }

    function deleteTodo (id) { // фильтруем массив и заносим все item которых на совподает id в новое состояние Todo 
        let newTodo = [...todo].filter(item=> item.id !== id)
        setTodo(newTodo)
    }
    
    function statusTodo(id) { 
        let newStatus = [...todo].map(item =>{ // проходимся по массиву
          if (item.id === id) { // если id равен item.id, если стасус item равен одному то снова проходимся по массиву и всем остальным item со статусом 2 ( в процессе)  присваиваем стасус 1 (в ожидании). А нужному item присвоим стасус 2
            if (item.status === 1) { 
              [...todo].map(item =>{
                if (item.status === 2) {
                  item.status =1
                }
                return item
              })
              item.status = 2
            } else { 
              item.status = 1
            }
          }
          return item
        })
        setTodo(newStatus)
      }

    return (
        <div className='TodoItem'> 
            <div className={`TodoTitle ${item.status === 1 ? 'WaitTodo' : item.status === 2 ? 'ProgressTodo' : 'EndTodo'}`} onClick={()=> endTodo(item.id)}> {item.title} </div> 
            <button className='BtnDelete' onClick={()=>deleteTodo(item.id)}>Удалить</button>
            <button className='BtnEdit' onClick={()=>editTodo(item.id)}>Редактировать</button> 
            {
                item.status === 1 ?
                    <button className='BtnStatus' onClick={()=>statusTodo(item.id)}>В активность</button>:
                item.status === 2 ?
                    <button className='BtnStatus' onClick={()=>statusTodo(item.id)}>Снять активность</button>:
                console.log()
            }
        </div>
    )
}
