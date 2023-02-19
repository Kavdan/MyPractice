import React, { useState } from 'react'
import { Card } from './Card'

export const ListOfCards = () => {
    const [questions, setQuestions] = useState([
        {
            title: "first question",
            options: [
                "first", "second", "third"
            ],
            rightAnswer: 1
        },
        {
            title: "second question",
            options: [
                "first", "second", "third"
            ],
            rightAnswer: 1
        },
        {
            title: "third question",
            options: [
                "first", "second", "third"
            ],
            rightAnswer: 1
        }
    ])
    const [rightAnswers, setRightAnswers] = useState(0);
    const [nextQuestion, setNextQuestion] = useState(0);
    const currentQuestion = questions[nextQuestion];

  return (
    <div>
        { nextQuestion === questions.length ? 
        <Card result={true}
              rightAnswerCount={rightAnswers}
              nextQuestion={nextQuestion}
              setNextQuestion={setNextQuestion}
              setRightAnswers={setRightAnswers}
              />  
        :
        <Card title={currentQuestion.title}
              options={currentQuestion.options}
              rightAnswer={currentQuestion.rightAnswer}
              setNextQuestion={setNextQuestion}
              setRightAnswers={setRightAnswers}
              nextQuestion={nextQuestion}
              rightAnswerCount={rightAnswers}/>
        }
    </div>
  )
}
