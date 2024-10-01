import React, { useState } from 'react';

import { TodoInput } from "./TodoInput";
import { TodoDisplay } from './TodoDisplay';



export const TodoCard = () => {
  const [tasklist, setTasklist] = useState(["hello","hi"]);
  return (

    <div className='card'>
        <h1 className='title'>TodoCard</h1>
      
        <TodoDisplay props={tasklist}/>
        <TodoInput /> 
   
        
    </div>
  )
}
