import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { PrimaryButton, SecondaryButton } from '../Button/Button';

const FooterContainer = styled.footer`
  display: flex;
  width: 100%;
  height: 116px;
  padding: 8px 0;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-top: 2px solid color(display-p3 0.2275 0.2745 0.3059);
  border-top: 2px solid #37464F; /* Fallback */
  background: #121F25;
`;

const FooterContent = styled.div`
  display: flex;
  width: 100%;
  max-width: 1440px;
  padding: 0 112px;
  justify-content: space-between;
  align-items: center;
`;

const TimerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #6BBCF3;
  font-family: 'SF Pro Rounded', -apple-system, BlinkMacSystemFont, sans-serif;
`;

const TimerIcon = styled.span`
  font-size: 24px;
  font-weight: 800;
  letter-spacing: 0.06em;
`;

const TimerText = styled.span`
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 0.06em;
`;

const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

const Footer = ({ 
  onCheck, 
  onSkip, 
  onNext,
  onTimeout,
  showNext = false,
  initialTime = 90 // 1:30 in seconds
}) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          onTimeout?.();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onTimeout]);

  // Reset timer when initialTime changes (new question)
  useEffect(() => {
    setTimeLeft(initialTime);
  }, [initialTime]);

  return (
    <FooterContainer>
      <FooterContent>
        {showNext ? (
          <PrimaryButton onClick={onNext}>
            NEXT QUESTION
          </PrimaryButton>
        ) : (
          <PrimaryButton onClick={onCheck}>
            CHECK ANSWER
          </PrimaryButton>
        )}
        
        <TimerContainer>
          <TimerIcon>􀐰</TimerIcon>
          <TimerText>{formatTime(timeLeft)}</TimerText>
        </TimerContainer>

        <SecondaryButton onClick={onSkip}>
          SKIP
        </SecondaryButton>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
