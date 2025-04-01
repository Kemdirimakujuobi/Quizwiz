import React from 'react';
import styled from '@emotion/styled';

const baseButtonStyles = `
  display: flex;
  width: 100%;
  padding: 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  background: transparent;
  cursor: pointer;
  border-radius: 24px;
  
  /* Text Styles */
  color: #FFFFFF;
  font-size: 24px;
  font-weight: 600;
  text-align: left;

  /* Base Border Style */
  border-bottom-width: 8px;

  /* Hover State */
  &:hover {
    transform: translateY(-1px);
  }

  /* Active/Clicked State */
  &:active {
    transform: translateY(2px);
    border-bottom-width: 6px;
  }

  /* Transitions */
  transition: all 0.2s ease;
`;

const StyledButton = styled.button`
  ${baseButtonStyles}
  
  /* Default Border Styles */
  display: flex;
  width: 100%;
  padding: 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  background: transparent;
  cursor: pointer;
  
  /* Border Styles */
  border-radius: 24px;
  border-top: 2px solid color(display-p3 0.2275 0.2745 0.3059);
  border-right: 2px solid color(display-p3 0.2275 0.2745 0.3059);
  border-bottom: 8px solid color(display-p3 0.2275 0.2745 0.3059);
  border-left: 2px solid color(display-p3 0.2275 0.2745 0.3059);

  /* Fallback borders */
  border-top: 2px solid #37464F;
  border-right: 2px solid #37464F;
  border-bottom: 8px solid #37464F;
  border-left: 2px solid #37464F;

  /* Text Styles */
  color: #FFFFFF;
  font-size: 24px;
  font-weight: 600;
  text-align: left;

  /* Hover & Active States */
  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(2px);
    border-bottom-width: 6px;
  }

  /* Transition */
  transition: all 0.2s ease;
`;

const AnswerText = styled.span`
  flex: 1;
`;

const CheckBadge = styled.div`
  position: absolute;
  right: 19.454px;
  top: -20px;
  display: flex;
  transform: rotate(8deg);
  padding: 6px 10px 6px 8px;
  justify-content: center;
  align-items: center;
  gap: 2px;
  border-radius: 99px;
  background: color(display-p3 0.4706 0.7843 0.2392);
  background: #59CB07; /* Fallback */
  box-shadow: 0px -2px 0.5px 0px color(display-p3 0 0 0 / 0.24) inset;
  box-shadow: 0px -2px 0.5px 0px rgba(0, 0, 0, 0.24) inset; /* Fallback */
`;

const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <polyline 
      points="20 6 9 17 4 12" 
      stroke="white" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

const CorrectButton = styled(StyledButton)`
  position: relative;
  /* Correct Border Styles */
  border-top: 2px solid color(display-p3 0.4706 0.7843 0.2392);
  border-right: 2px solid color(display-p3 0.4706 0.7843 0.2392);
  border-bottom: 8px solid color(display-p3 0.4706 0.7843 0.2392);
  border-left: 2px solid color(display-p3 0.4706 0.7843 0.2392);

  /* Fallback borders */
  border-top: 2px solid #59CB07;
  border-right: 2px solid #59CB07;
  border-bottom: 8px solid #59CB07;
  border-left: 2px solid #59CB07;

  background: color(display-p3 0.0824 0.1216 0.1412);
  background: #121F25; /* Fallback */
`;

const WrongButton = styled(StyledButton)`
  /* Wrong Border Styles */
  border-top: 2px solid color(display-p3 0.9137 0.3412 0.3137);
  border-right: 2px solid color(display-p3 0.9137 0.3412 0.3137);
  border-bottom: 8px solid color(display-p3 0.9137 0.3412 0.3137);
  border-left: 2px solid color(display-p3 0.9137 0.3412 0.3137);

  /* Fallback borders */
  border-top: 2px solid #FC4848;
  border-right: 2px solid #FC4848;
  border-bottom: 8px solid #FC4848;
  border-left: 2px solid #FC4848;
`;

const AnswerButton = ({ letter, children, onClick, variant = 'default' }) => {
  const Button = variant === 'wrong' ? WrongButton : variant === 'correct' ? CorrectButton : StyledButton;

  return (
    <Button onClick={onClick}>
      {variant === 'correct' && (
        <CheckBadge>
          <CheckIcon />
        </CheckBadge>
      )}
      {letter && <span>{letter}. </span>}
      <AnswerText>{children}</AnswerText>
    </Button>
  );
};

export default AnswerButton;
