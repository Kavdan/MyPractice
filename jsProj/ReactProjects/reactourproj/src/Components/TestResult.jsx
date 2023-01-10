import React from 'react'
import { QuestionCard } from './QuestionCard'
import styled from "styled-components";

export const TestResult = ({Rquestions, QuestionsCount}) => {
    const Result = styled.div`
        border: 1px solid black;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    `
  return (
    <Result >
        <p>Вы оответили на {Rquestions} из {QuestionsCount} вопросов</p>
    </Result>
  )
}
