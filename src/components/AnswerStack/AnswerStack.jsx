import React from 'react';
import styled from '@emotion/styled';
import AnswerButton from '../AnswerButton/AnswerButton';

const StackContainer = styled.div`
  display: flex;
  width: 523px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  margin: 0 auto;
  max-width: 100%;
`;

const AnswerStack = ({ 
  answers = [], 
  selectedAnswer = null, 
  answerRevealed = false,
  onAnswerSelect = () => {} 
}) => {
  return (
    <StackContainer>
      {answers.map(({ letter, text, isCorrect }, index) => (
        <AnswerButton
          key={letter}
          letter={letter}
          variant={
            answerRevealed
              ? (isCorrect ? 'correct' : selectedAnswer === letter ? 'wrong' : 'default')
              : selectedAnswer === letter ? 'selected' : 'default'
          }
          onClick={() => onAnswerSelect(letter)}
        >
          {text}
        </AnswerButton>
      ))}
    </StackContainer>
  );
};

export default AnswerStack;
