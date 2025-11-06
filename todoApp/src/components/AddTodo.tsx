import { Button } from "@/components/ui/button"
// import {
//   Card,
//   CardAction,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import React, { useState, type ChangeEvent, type FormEvent } from "react"

type AddTodoProps = {
    onAddTodo : (todoText:string) => void
}

const AddTodo:React.FC<AddTodoProps> = ({onAddTodo}:AddTodoProps) => {
    const [input,setInput] = useState<string>("")

    const changeEventHandler = (event:ChangeEvent<HTMLInputElement>) =>{
         setInput(event.target.value)
    }
    const submitHandler = (event:FormEvent) =>{
    event.preventDefault()
    onAddTodo(input)
    setInput('')
    }

  return (
   <>
   <form className="flex items-center gap-5" onSubmit={submitHandler}>
    <Input 
    value={input}
    type='text'
    onChange={changeEventHandler}
     placeholder="Write a new todo"
      className="w-fit"/>
    <Button type="submit">Add Todo</Button>
   </form>
   </>
 
  )
}

export default AddTodo