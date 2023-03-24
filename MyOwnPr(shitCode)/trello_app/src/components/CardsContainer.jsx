import React, { useState } from "react";
import classes from "../app.module.scss";
import { Card } from "./Card";
import addIcon from "../assets/AddIcon.svg";
import { tags } from "../features/data";
import { ModuleWindow } from "./ModuleWindow";
import { useDispatch, useSelector } from "react-redux";
import { dragCard, getAllTasks } from "../features/slices/tasksSlice";

export const CardsContainer = ({setOpenModule, tasks}) => {
  const dispatch = useDispatch()
  const tasksInState = useSelector(getAllTasks);

  let current = {
    currCard: "",
    currBord: "",
  };

  const handleDragStart = (event, id) => {
    current = {...current, currCard: id};
  };

  const handleDragEnd = (event) => {
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();

  };

  const onDragContainerOver = (e, type) => {
      e.preventDefault();
      if(current.currBord === type) return;
      current = {...current, currBord: type};
  }

  const onDragContainerStart = (e, type) => {
    if (current.prevBoard === type) return;
    current = {...current, prevBoard: type}
  }

  const onDragContainerDrop = (e) => {
    e.preventDefault();
    dispatch(dragCard({
      tasksId: tasks.id,
      id: current.currCard,
      from: current.prevBoard,
      to: current.currBord
    }))
  }
  
  if(!tasks || tasksInState.length === 0) {
    if(tasksInState.length === 0) return <h1>Создайте Таск</h1>
    else return <h1>Этот таска удален</h1>
  }
    
  return (
    <div className={classes.cardsContainer}>
    {["do", "doing", "done"].map((type, i) => {
          return <div className={classes.doCards} key={i}>
          <h1 className={classes.doTitle}>
            {type} {type === "do" ? <img src={addIcon} alt=""
                    onClick={() => setOpenModule(true)}/>
                    : ""}
          </h1>
          <div draggable={true} 
               className={classes.cardsStore}
               onDragOver={(e) => onDragContainerOver(e, type)}
               onDragStart={(e) => onDragContainerStart(e, type)}
               onDrop={e => onDragContainerDrop(e)}>

            {type !== 'done' ? tasks.tasks[type].map(task => <Card cardTitle={task.name} 
                                              tags={task.tags} 
                                              onDragStart={e => handleDragStart(e, task.id)}
                                              onDragOver={e => handleDragOver(e, type)}
                                              onDragLeave={e => handleDragEnd(e)}
                                              onDrop={e => handleDrop(e, type)}
                                              done={false}
                                              type={type}
                                              cardId={task.id}
                                              taskId={tasks.id}
                                              key={task.id}
                                              />)
            : tasks.tasks[type].map(task => <Card cardTitle={task.name} 
                                                  tags={task.tags} 
                                                  done={true}
                                                  type={type}
                                                  cardId={task.id}
                                                  taskId={tasks.id}
                                                  key={task.id}/>)}
          </div>
        </div>
    })}
    </div>
  );
};
