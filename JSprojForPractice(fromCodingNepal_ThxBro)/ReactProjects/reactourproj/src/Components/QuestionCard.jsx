import React from "react";
import styled from "styled-components";

export const QuestionCard = ({title, questions, onClickQuestions}) => {
  const Card = styled.div`
    border: 1px solid black;
    border-radius: 10px;
    width: 100%;
    min-height: 300px;
    padding: 10px;
  `;

  const QuestionsList = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0px;
    padding:0px;
    li {
      padding: 6px;
      margin-top: 10px;

      :hover {
        border: 1px solid black;
        border-radius: 10px;
        cursor: pointer;
        padding: 5px;
      }

    }
  `;

  return (
    <Card>
      <QuestionsList>
        <h1>title</h1>
        {questions ? questions.map((question, index) => <li key={index} onClick={() => onClickQuestions(index)}>{question}</li>) : 
        <li>question</li>}
      </QuestionsList>
    </Card>
  );
};
