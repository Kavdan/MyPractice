import React from 'react'
import cl from './styles/card.module.css'
export const Card = ({title, 
                      options, 
                      setRightAnswers, 
                      setNextQuestion, 
                      rightAnswer,
                      nextQuestion,
                      rightAnswerCount,
                      result}) => {
    
    const checkAnswer = (e, index) => {
        e.stopPropagation();
        if (index === rightAnswer) {
            setRightAnswers(rightAnswerCount + 1);
        }
        setNextQuestion(nextQuestion + 1);
    }

    const resetQuestions = () =>  {
        setNextQuestion(0);
        setRightAnswers(0);
    }

    return (
    <div className={cl.card}>
        {result ?
            <div className={cl.result}>
                <h2 className={cl.resultH}>
                    Correct: {rightAnswerCount} from {nextQuestion} questions
                    </h2>
                <button onClick={resetQuestions}>Try again</button>
            </div> : 
            <><h1 className={cl.title}>
                    {nextQuestion + 1}.{title}
                </h1><ul className={cl.ul}>
                        {options.map((option, i) => {
                            return <li key={i}
                                onClick={(e) => checkAnswer(e, i + 1)}
                                className={cl.li}>{i + 1}.{option}</li>;
                        })}
                    </ul></>
        }
    </div>
  )
}
