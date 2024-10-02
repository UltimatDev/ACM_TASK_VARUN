import React, { useState } from 'react'

export const TodoCard = () => {

    const [tasks,setTasks] = useState(["hello, hi"]);
    
    return (
        <TodoDisplay props={tasks}/>
  )
}
