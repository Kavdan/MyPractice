import React, { useEffect, useState } from 'react'
import classes from '../app.module.scss'
import { MainTask } from './MainTask'
import leftMenuIcon from '../assets/leftMenu.svg'
import { useDispatch } from 'react-redux'
import { addTask, changeActiveTask } from '../features/slices/tasksSlice'
import createTaskIcon from '../assets/AddIcon.svg'

export const MainTasksList = ({tasks, setOpenModule}) => {
    const [open, setOpen] = useState(false)
    const dispatch = useDispatch();

    const leftMenuClasses = open ? classes.leftMenuIcon + " " + classes.leftMenuActive
                            : classes.leftMenuIcon
    const menuClosedClasses = open ? classes.mainTaskList
                                    : classes.mainTaskList + " " + classes.mainTaskListClosed
  return (
  <div className={classes.mainTaskListFixed}>
      <div className={classes.mainTaskListContainer}>
        <img src={leftMenuIcon} className={leftMenuClasses}
             onClick={() => setOpen(!open)}/>

        <div className={menuClosedClasses}>
          <img src={createTaskIcon} 
               className={classes.createTaskIcon} 
               alt=""
               onClick={e => setOpenModule(true)} />
        {tasks.map((task, i) => <MainTask taskName={task.name} 
                                     key={task.id}
                                     src={task.icon}
                                     active={task.active}
                                     onClick={() => dispatch(changeActiveTask(task.id))}
                                     taskId={task.id}/>)}

        </div>
    </div>
  </div>
  )
}
