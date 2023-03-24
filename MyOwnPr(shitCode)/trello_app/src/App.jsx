import { Children, useState } from 'react'
import { MainTask } from './components/MainTask'
import taskIcon from './assets/react.svg'
import { MainTasksList } from './components/MainTasksList'
import { Card } from './components/Card'
import classes from './app.module.scss'
import { CardsContainer } from './components/CardsContainer'
import { ModuleWindow } from './components/ModuleWindow'
import { CreateTask } from './components/CreateTask'
import { useDispatch, useSelector } from 'react-redux'
import { getActiveTask, getAllTasks } from './features/slices/tasksSlice'
import { CreateTopTask } from './components/createTopTask'

function App() {
  const [openModule, setOpenModule] = useState(false)
  const [openCreateTopTaskModule, setCreateTopTaskModule] = useState(false);
  const tasks = useSelector(getAllTasks)
  const task = useSelector(getActiveTask)
  const dispatch = useDispatch();

  const createTask = () => <CreateTask taskID={task?.id}/>
  const createTopTask = () => <CreateTopTask />

  return (
    <div className={classes.app}>
      <ModuleWindow open={openModule} 
                    setOpen={setOpenModule}
                    element={() => createTask()}/>
                    
      <ModuleWindow open={openCreateTopTaskModule} 
                    setOpen={setCreateTopTaskModule}
                    element={() => createTopTask()}/>              
      <MainTasksList tasks={tasks} task={task} setOpenModule={setCreateTopTaskModule}/>
      <CardsContainer setOpenModule={setOpenModule} 
                      tasks={task}/>
    </div>
  )
}

export default App
