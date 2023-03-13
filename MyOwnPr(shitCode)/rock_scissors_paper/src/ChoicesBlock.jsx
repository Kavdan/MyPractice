import React from 'react'
import classes from './features/gameSlice/game.module.scss'

const ChoicesBlock = ({arrUser, gameListener}) => {
  return (
    <div className={classes.choice}>
      {arrUser && arrUser.length ? arrUser.map((img, index) => {
        return (
          <img
            src={img.img}
            className={classes.choiceimg}
            key={index}
            onClick={() => gameListener(img.type)}
          />
        );
      }) : <h1>Problem on server! Pls, try later </h1>}
    </div>
  );
}

export default ChoicesBlock