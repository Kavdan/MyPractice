import React from 'react'
import classes from './features/gameSlice/game.module.scss'
import white from './assets/slide_4.jpg'
import muha from './assets/1614547901_44-p-mukha-na-belom-fone-48.jpg'
const UserAIBlocks = ({scores, curImg}) => {
  return (
    <div className={classes.game}>
        <div className={classes.user}>
            <h1>USER score: {scores.userScore}</h1>
            <img className={classes.userImg} 
                 src={curImg.userImg.img ? curImg.userImg.img : muha} alt="" />
        </div>
        <div className={classes.AI}>
            <h1 style={{textAlign: 'end'}}>AI score: {scores.AIScore}</h1>
            <img className={classes.AIImg} 
                 src={curImg.AiImg.img ? curImg.AiImg.img : white} alt="" />
        </div>
    </div>
  )
}

export default UserAIBlocks