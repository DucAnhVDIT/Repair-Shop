import React, { use, useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'

function AddTodo({onAdd} : {onAdd:(text: string) => void}) {
    const [newTodo, setNewTodo] = useState("")

    const handleAdd = async () => {
        if(newTodo.trim() !== ""){
            await onAdd(newTodo)
            setNewTodo("")
        }
    }
  return (
    <div className="flex space-x-2 mb-4">
      <Input
        type="text"
        placeholder="Add a new todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
      />
      <Button onClick={handleAdd}>Add</Button>
    </div>
  )
}

export default AddTodo