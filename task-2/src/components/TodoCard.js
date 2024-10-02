import React, { useState } from 'react';


import { TodoDisplay } from './TodoDIsplay';

export const TodoCard = () => {
  const [tasklist, setTasklist] = useState(["hello","hi"]);
  return (

    <div className='card'>
        <h1 className='title'>TodoCard</h1>
        
        <TodoDisplay props={tasklist}/>
        <div className='input-flex'>
        <input type="text" className='input' ></input>
        <button>Submit</button>
        
    </div>
   
        
    </div>
  )                         
}            
