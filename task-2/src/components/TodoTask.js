import React from 'react'

export const TodoTask = ({props}) => {
  return (
    <div className='todo-task'>
        <h1 className='print'>{props}</h1>
    </div>
  )
}
