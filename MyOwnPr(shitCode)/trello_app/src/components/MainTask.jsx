import React from 'react'
import { useDispatch } from 'react-redux';
import classes from '../app.module.scss'
import delTaskIcon from '../assets/deleteIcon.svg'
import { delTopTask } from '../features/slices/tasksSlice';

export const MainTask = ({src, taskName, active, taskId, ...props}) => {
    if (taskName.length > 10) {
        taskName = taskName.slice(0, 11) + " ...";
    }
    const dispatch = useDispatch();
  return (
    <div {...props} style={{
      background: active ? "#545454" : "#6d6d6d"
    }} className={classes.mainTask}>
        {src ? <img src={src} alt="" className={classes.taskImage} />
             : ""}
        <p className={classes.taskName}>{taskName}</p>
        <img className={classes.delTaskIcon} 
             src={delTaskIcon} alt=""
             onClick={e => {
              e.stopPropagation();
              dispatch(delTopTask(taskId))
            }}
              />
    </div>
  )
}
