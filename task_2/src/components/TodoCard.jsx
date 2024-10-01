import React, { useState } from 'react'

export const TodoCard = () => {

    const [tasks,setTasks] = useState([]);
    
    return (
        <TodoDisplay />
  )
}
