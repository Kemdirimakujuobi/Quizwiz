import React from 'react';
import styled from '@emotion/styled';
import QuestionBubble from '../QuestionBubble/QuestionBubble';

const ScreenContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 523px;
  margin-top: 56px;
`;

const BubbleWrapper = styled.div`
  position: absolute;
  top: -120px;
  left: 0;
  width: 100%;
  z-index: 2;
  margin-bottom: 56px;

  /* Center the bubble and its notch */
  & > div {
    display: flex;
    justify-content: center;
  }

  & > div > div {
    position: relative !important;
    left: auto !important;
  }

  & > div > svg {
    position: absolute !important;
    left: 50% !important;
    bottom: -20px !important;
    top: auto !important;
    transform: translateX(-50%) rotate(180deg);
  }
`;

const ButtonStack = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 56px;
`;

const BaseButton = styled.button`
  display: flex;
  width: 163px;
  height: 172px;
  padding: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: none;
  cursor: pointer;
  position: relative;

  border-radius: 24px;
  border-top: 2px solid #37464F;
  border-top: 2px solid color(display-p3 0.2275 0.2745 0.3059);
  border-right: 2px solid #37464F;
  border-right: 2px solid color(display-p3 0.2275 0.2745 0.3059);
  border-bottom: 8px solid #37464F;
  border-bottom: 8px solid color(display-p3 0.2275 0.2745 0.3059);
  border-left: 2px solid #37464F;
  border-left: 2px solid color(display-p3 0.2275 0.2745 0.3059);
  background: #121F25;
  background: color(display-p3 0.0824 0.1216 0.1412);

  &:hover {
    opacity: 0.9;
  }
`;

const ProButton = styled(BaseButton)`
  border-top: 2px solid #FFE400;
  border-top: 2px solid color(display-p3 0.9961 0.898 0);
  border-right: 2px solid #FFE400;
  border-right: 2px solid color(display-p3 0.9961 0.898 0);
  border-bottom: 8px solid #FFE400;
  border-bottom: 8px solid color(display-p3 0.9961 0.898 0);
  border-left: 2px solid #FFE400;
  border-left: 2px solid color(display-p3 0.9961 0.898 0);
`;

const ProTag = styled.div`
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%) rotate(8deg);
  display: flex;
  padding: 6px 10px 6px 8px;
  justify-content: center;
  align-items: center;
  gap: 2px;
  z-index: 1;

  border-radius: 99px;
  background: #FFE400;
  background: color(display-p3 0.9961 0.898 0);
  box-shadow: 0px -2px 0.5px 0px rgba(0, 0, 0, 0.24) inset;
  box-shadow: 0px -2px 0.5px 0px color(display-p3 0 0 0 / 0.24) inset;
  
  font-family: "SF Pro Rounded", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #121F25;
`;

const TrophyIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M4.66667 2.66667H11.3333M4.66667 2.66667V6.66667C4.66667 9.244 6.75601 11.3333 9.33334 11.3333H11.3333M4.66667 2.66667H2.66667V6.66667C2.66667 7.77124 3.56209 8.66667 4.66667 8.66667V6.66667M11.3333 2.66667V6.66667C11.3333 7.77124 12.2288 8.66667 13.3333 8.66667V6.66667V2.66667H11.3333ZM6.66667 11.3333V13.3333M9.33334 11.3333V13.3333M6 13.3333H10" 
      stroke="#121F25" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);

const ButtonText = styled.div`
  color: #F1F7FB;
  color: color(display-p3 0.949 0.9686 0.9843);
  text-align: center;
  font-family: "ABC Diatype Rounded Variable Unlicensed Trial";
  font-style: normal;
  font-weight: 800;
  letter-spacing: 1.2px;
  white-space: pre-wrap;
  
  & > span:first-of-type {
    display: block;
    font-size: 40px;
    line-height: 1;
  }
  
  & > span:last-of-type {
    display: block;
    font-size: 20px;
    line-height: 1;
  }
`;

const DifficultyScreen = ({ onSelectDifficulty }) => {
  return (
    <ScreenContainer>
      <ContentWrapper>
        <BubbleWrapper>
          <QuestionBubble>
            How many questions do you want to generate from this material?
          </QuestionBubble>
        </BubbleWrapper>
        <ButtonStack>
          <BaseButton onClick={() => onSelectDifficulty(10)}>
            <ButtonText><span>10</span><span>Questions</span></ButtonText>
          </BaseButton>
          <ProButton onClick={() => onSelectDifficulty(20)}>
            <ProTag>
              􀠐Pro
            </ProTag>
            <ButtonText><span>20</span><span>Questions</span></ButtonText>
          </ProButton>
          <ProButton onClick={() => onSelectDifficulty(40)}>
            <ProTag>
              􀠐Pro
            </ProTag>
            <ButtonText><span>40</span><span>Questions</span></ButtonText>
          </ProButton>
        </ButtonStack>
      </ContentWrapper>
    </ScreenContainer>
  );
};

export default DifficultyScreen;
