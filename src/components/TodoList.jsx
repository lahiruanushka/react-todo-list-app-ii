import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({todoList}) => {
  return (
    <div>{
        todoList.map((todo) => <TodoItem key={todo.id} todo={todo.todo}/>)
        }</div>
  )
}

export default TodoList