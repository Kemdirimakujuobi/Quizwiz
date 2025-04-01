import React from 'react';
import styled from '@emotion/styled';
import { PrimaryButton, IconButton } from '../Button/Button';
import XpBadge from '../XpBadge/XpBadge';

const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  height: 86px;
  padding: 8px 0;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background: color(display-p3 0.0824 0.1216 0.1412);
  background: #121F25; /* Fallback */
`;

const HeaderContent = styled.div`
  display: flex;
  width: 100%;
  max-width: 1440px;
  padding: 0 112px;
  justify-content: space-between;
  align-items: center;
`;

const StyledIconButton = styled(IconButton)`
  color: #4CC9F0;
  
  svg {
    width: 24px;
    height: 24px;
  }
`;

const ProgressBarContainer = styled.div`
  width: 385px;
  height: 16px;
  flex-shrink: 0;
  background: color(display-p3 0.2275 0.2745 0.3059);
  background: #37464F; /* Fallback */
  border-radius: 40px;
  position: relative;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: ${props => props.progress}%;
  background: #58CC02;
  border-radius: 40px;
  transition: width 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 4px;
    width: 92px;
    height: 5px;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 40px;
  }
`;



const Header = ({ progress, points = 0, onExit, onCheckAnswer }) => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <StyledIconButton onClick={onExit} aria-label="Exit">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" 
                  fill="currentColor"/>
          </svg>
        </StyledIconButton>
        
        <ProgressBarContainer>
          <ProgressFill progress={progress} />
        </ProgressBarContainer>

        <XpBadge points={points} />
        
        {/* Check answer button temporarily hidden
        <PrimaryButton onClick={onCheckAnswer}>
          CHECK ANSWER
        </PrimaryButton>
        */}
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
