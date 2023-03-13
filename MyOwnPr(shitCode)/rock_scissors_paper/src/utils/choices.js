import AIpaper from '../assets/AIpaper.svg'
import AIrock from '../assets/AIrock.svg'
import AIscissors from '../assets/AIscissors.svg'
import HumanPaper from '../assets/HUMANpaper.svg'
import HumanRock from '../assets/HUMANrock.svg'
import HumanScissors from '../assets/HUMANscissors.svg'

export const arrUser = [{img: HumanPaper, type: 'paper'},
{img: HumanRock, type: 'rock'}, 
{img: HumanScissors, type: 'scissors'}];

export const arrAI = [{img: AIpaper, type: 'paper'},
{img: AIrock, type: 'rock'}, 
{img: AIscissors, type: 'scissors'}];

export const createStateByChoice = (choice) => {
    return {
        userImg: [...arrUser].filter((image) => image.type === choice)[0],
        AiImg: arrAI[Math.floor(arrAI.length * Math.random())],
      };
} 