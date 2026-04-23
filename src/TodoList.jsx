import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
  // state variable
  // 
  let [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4(), isDone: false }])
  let [newTodo, setNewTodo] = useState("")

  let addNewTask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }]
    })
    setNewTodo("")
  }

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  }

  let deleteTodoValue = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }

  // mark all as done
  let markAllAsDone = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => ({
        ...todo,
        isDone: true
      }))
    );
  };

  // mark as done
  let markAsDone = (id) => {
    setTodos((prevTodos) => prevTodos.map((todo) => {
      if (todo.id == id) {
        return {
          ...todo,
          isDone: true
        }
      } else {
        return todo
      }
    }))
  }

  return (
    <div>
      <input placeholder='Enter your task' value={newTodo} onChange={updateTodoValue} />
      <span></span> <span></span>
      <button onClick={addNewTask}>Add Task</button>
      <hr />
      <h3>Todo List</h3>
      <ul>
        {
          todos.map((todo) => (
            <li key={todo.id}>
              <span style={todo.isDone ? {textDecorationLine:"line-through"}: {}}>
                {todo.task}
              </span>
              &nbsp; &nbsp; &nbsp;
              <button onClick={() => deleteTodoValue(todo.id)}>Delete</button>
              <span></span> <span></span>
              <button onClick={() => markAsDone(todo.id)}>Mark as Done</button>
            </li>
          ))
        }
      </ul>
      <hr />
      <button onClick={markAllAsDone}>Mark All as Done</button>
    </div>
  )
}