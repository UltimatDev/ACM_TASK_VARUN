import React from 'react'
import {TodoInput} from "./TodoInput";
import { TodoDisplay } from './TodoDisplay';

export const TodoCard = () => {
  return (
    <div className='card'>
        <h1 className='title'>TodoCard</h1>
        <TodoDisplay />
        <TodoInput />
        
    </div>
  )
}
