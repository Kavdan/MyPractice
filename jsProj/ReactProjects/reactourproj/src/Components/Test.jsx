import React, { useState } from 'react'
import styled from 'styled-components'
import { QuestionCard } from './QuestionCard';
import { TestResult } from './TestResult'

export const Test = () => {
    const [correct, setCorrect] = useState(0);
    const [step, setStep] = useState(0);
    const [questions, setQuestions] = useState([
        {
            title: 'How much this puch?', 
            questions: ['300$', '300rub', '300spartacuses'],
            correct: 0
        },

        {
            title: 'How much this kulach?', 
            questions: ['700$', '400rub', '100Hundred'],
            correct: 2
        }
    ]);

    const onClickQuestions = (index) => {
        if (questions[step].correct == index) {
            setCorrect(correct + 1);
        }
        setStep(step + 1);
        console.log(step);       
    }
  return (
     step !== questions.length ? <QuestionCard title={questions[step].title} 
                   questions = {questions[step].questions} 
                   onClickQuestions = {onClickQuestions}
                   />
                   :
                    <TestResult Rquestions = {correct} QuestionsCount = {questions.length}/>
        
    
  )
}
