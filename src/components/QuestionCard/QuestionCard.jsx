import React, { useState } from 'react';
import styled from '@emotion/styled';

const CardContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 1.5rem;
  background: #FFFFFF;
  border-radius: 16px;
`;

const Question = styled.h2`
  font-family: 'SF Pro Rounded', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: #1D1D1D;
  margin-bottom: 1.5rem;
  line-height: 1.4;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const OptionButton = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.875rem;
  border: 1px solid ${props => props.isSelected 
    ? (props.isCorrect ? '#58CC02' : '#FF4B4B')
    : '#E5E5E5'};
  border-radius: 12px;
  background: ${props => props.isSelected 
    ? (props.isCorrect ? '#DAF4C5' : '#FFF0F0')
    : '#FFFFFF'};
  cursor: pointer;
  transition: all 0.15s ease;
  text-align: left;

  &:hover {
    background: ${props => !props.isSelected && '#F7F7F7'};
    border-color: ${props => !props.isSelected && '#DADADA'};
  }
`;

const CheckCircle = styled.div`
  width: 20px;
  height: 20px;
  border: 1.5px solid ${props => props.isSelected 
    ? (props.isCorrect ? '#58CC02' : '#FF4B4B')
    : '#E5E5E5'};
  border-radius: 50%;
  margin-right: 0.75rem;
  position: relative;
  flex-shrink: 0;

  ${props => props.isSelected && props.isCorrect && `
    &:after {
      content: '✓';
      position: absolute;
      color: #58CC02;
      font-size: 14px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  `}

  ${props => props.isSelected && !props.isCorrect && `
    &:after {
      content: '×';
      position: absolute;
      color: #FF4B4B;
      font-size: 16px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  `}
`;

const OptionText = styled.span`
  font-family: 'SF Pro Rounded', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  color: #1D1D1D;
  font-weight: ${props => props.isSelected ? '600' : '400'};
`;

const FeedbackMessage = styled.div`
  margin-top: 1rem;
  padding: 0.75rem;
  border-radius: 8px;
  background: ${props => props.isCorrect ? '#DAF4C5' : '#FFF0F0'};
  color: ${props => props.isCorrect ? '#58CC02' : '#FF4B4B'};
  font-family: 'SF Pro Rounded', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 600;
  font-size: 14px;
`;

const QuestionCard = ({ question, options, correctAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    if (selectedOption === null) {
      setSelectedOption(option);
    }
  };

  const isCorrectAnswer = selectedOption === correctAnswer;

  return (
    <CardContainer>
      <Question>{question}</Question>
      <OptionsContainer>
        {options.map((option, index) => (
          <OptionButton
            key={index}
            onClick={() => handleOptionSelect(option)}
            isSelected={selectedOption === option}
            isCorrect={selectedOption === option && isCorrectAnswer}
          >
            <CheckCircle 
              isSelected={selectedOption === option}
              isCorrect={selectedOption === option && isCorrectAnswer}
            />
            <OptionText>{option}</OptionText>
          </OptionButton>
        ))}
      </OptionsContainer>
      {selectedOption && (
        <FeedbackMessage isCorrect={isCorrectAnswer}>
          {isCorrectAnswer 
            ? "Correct! Well done!" 
            : "Incorrect. Try again!"}
        </FeedbackMessage>
      )}
    </CardContainer>
  );
};

export default QuestionCard;
