import { nanoid } from '@reduxjs/toolkit'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import classes from '../app.module.scss'
import { Tag } from '../components/Tag'
import { addTask } from '../features/slices/tasksSlice'

export const CreateTask = ({taskID}) => {
  const dispatch = useDispatch();

  const [task, setTask] = useState({
    id: nanoid(),
    name: "",
    tags: []
  })

  const addTags = (e) => {
    if (e.keyCode == "32" 
        && e.target.value.length > 2 && task.tags.length <= 5) {
      setTask({...task, tags: 
        [...task.tags.filter(tag => !task.tags.includes(e.target.value)),
         e.target.value]})
      e.target.value = "";
    }
  }

  const sendTask = () => {
    if (!task.name.length || !task.tags.length) {
      alert("Заполните поля и добавьте хотя бы одни тег");
      return;
    }
    dispatch(addTask({id: taskID, newTask: task}))
    setTask({
      id: nanoid(),
      name: "",
      tags: []
    })
  }

  return (
    <div className={classes.createTask}>
        <label htmlFor="">
            Taks Name: 
            <input type="text" 
                   className={classes.taskName}
                   value={task.name}
                   onInput={e => setTask({...task, name: e.target.value})}/>
        </label>
        <div className={classes.addTags}>
            <label htmlFor="">
                Add Tags: 
                <input type="text" 
                       onKeyDown={e => addTags(e)}/>
            </label>
            <div className={classes.tagList}>
              {task.tags.map((tag, i) => <Tag text={tag} key={i}/>)}
              <ul>
                <li>Тег добавляется по нажатию пробела</li>
                <li>Длинна символов тега должна быть больше двух</li>
                <li>Не больше 5 тегов</li>
              </ul>
            </div>
        </div>
        <button onClick={() => sendTask()}>add task</button>
    </div>
  )
}
