import React from 'react';
import styled from '@emotion/styled';

const BubbleWrapper = styled.div`
  position: relative;
  width: 100%;
  box-sizing: border-box;
`;

const BubbleContainer = styled.div`
  position: relative;
  display: flex;
  width: 523px;
  padding: 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 24px;
  border: 2px solid color(display-p3 0.2275 0.2745 0.3059);
  border: 2px solid #37464F; /* Fallback */
  background: color(display-p3 0.0824 0.1216 0.1412);
  background: #121F25; /* Fallback */
`;

const NotchSVG = styled.svg`
  position: absolute;
  left: 35.927px;
  top: -11px;
`;

const QuestionText = styled.p`
  color: #FFFFFF;
  font-size: 24px;
  font-weight: 600;
  text-align: left;
  width: 100%;
`;

const QuestionBubble = ({ children }) => {
  return (
    <BubbleWrapper>
      <BubbleContainer style={{ position: 'absolute', left: '0' }}>
      <NotchSVG xmlns="http://www.w3.org/2000/svg" width="38" height="20" viewBox="0 0 38 20" fill="none">
        <path 
          d="M19.0002 1C9.57078 1 1.92676 8.93522 1.92676 18.7238H36.0735C36.0735 8.93522 28.4295 1 19.0002 1Z" 
          fill="#151F24"
          style={{
            fill: 'color(display-p3 0.0824 0.1216 0.1412)',
            fillOpacity: 1
          }}
        />
        <path 
          d="M36.0735 18.7238C36.0735 8.93522 28.4295 1 19.0002 1C9.57078 1 1.92676 8.93522 1.92676 18.7238" 
          stroke="#3A464E"
          style={{
            stroke: 'color(display-p3 0.2275 0.2745 0.3059)',
            strokeOpacity: 1
          }}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </NotchSVG>
        <QuestionText>{children}</QuestionText>
      </BubbleContainer>
    </BubbleWrapper>
  );
};

export default QuestionBubble;
