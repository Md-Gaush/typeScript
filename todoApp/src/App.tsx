
import { useState } from "react"
import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList"
import type { Todo } from "./types/todo"

function App() {
  const [todos,setTodos] = useState<Todo[]>([])

  const addTodoHandler = (text:string)=>{
    const id=Math.random().toString()
     setTodos([...todos,{id,text}]);
  }
  return (
    <>
    <div className="max-w-5xl mx-auto mt-10">
    <AddTodo   onAddTodo={addTodoHandler}/>
    <TodoList items ={todos}/>
    </div>
    
    </>
     
   
  )
}

export default App