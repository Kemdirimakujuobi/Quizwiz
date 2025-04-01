import React from 'react';
import styled from '@emotion/styled';
import AnswerStack from '../AnswerStack/AnswerStack';
import QuestionBubble from '../QuestionBubble/QuestionBubble';



const QuestionContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1440px;
  padding: 75px 7.8% 48px calc(7.8% + 120px); /* Base padding 7.8% (112px/1440px) plus offset */
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 75px 5% 48px calc(5% + 60px); /* Smaller offset on mobile */
  }
`;

const AnswerContainer = styled.div`
  position: absolute;
  bottom: 64px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const MainContentContainer = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  min-height: 100%;
`;



const MainContent = ({ question, answers, selectedAnswer, answerRevealed, onAnswerSelect }) => {
  return (
    <MainContentContainer>
      <QuestionContainer>
        <QuestionBubble>{question}</QuestionBubble>
      </QuestionContainer>
      <AnswerContainer>
        <AnswerStack
          answers={answers}
          selectedAnswer={selectedAnswer}
          answerRevealed={answerRevealed}
          onAnswerSelect={onAnswerSelect}
        />
      </AnswerContainer>
    </MainContentContainer>
  );
};

export default MainContent;
