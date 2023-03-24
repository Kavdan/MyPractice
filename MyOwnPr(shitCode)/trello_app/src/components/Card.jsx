import React from 'react'
import classes from '../app.module.scss'
import { Tag } from './Tag'
import delIcon from '../assets/deleteIcon.svg'
import { useDispatch } from 'react-redux'
import { delCard } from '../features/slices/tasksSlice'
export const Card = ({cardTitle, 
                      tags, 
                      done, 
                      type, taskId, cardId, ...props }) => {

  const dispatch = useDispatch();

  return (
    <div {...props} className={!done ? classes.card
                                    : classes.card + " " + classes.cardDone} draggable={true}>
        <div className={classes.tags}>
        {tags ? tags.map((tag, i) => <Tag text={tag} key={i}/>) : ''}
        </div>

        <h2 className={classes.cardTitle}>{cardTitle}</h2>    
        <img src={delIcon} 
             alt=""
             className={classes.cardDelIcon}
             onClick={(e) => {
              e.stopPropagation();
              dispatch(delCard({type, taskId, cardId}))
             }} />   
    </div>
  )
}
