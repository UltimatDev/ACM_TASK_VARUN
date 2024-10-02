import React from 'react'
import {TodoTask} from "./TodoTask"

export const TodoDisplay = ({props}) => {

    
    
    return(
      <div>
      {
      props.map((task,index),()=>{
      <TodoTask props={task}/>
    }
      )}
</div>
      )
    
  
}
