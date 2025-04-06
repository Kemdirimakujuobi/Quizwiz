import React from 'react';
import styled from '@emotion/styled';
import { PrimaryButton, SecondaryButton } from '../Button/Button';
import useCountUp from '../../hooks/useCountUp';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  gap: 24px;
`;

const Score = styled.div`
  color: #FFF;
  color: color(display-p3 1 1 1);
  font-family: "ABC Diatype Rounded Variable Unlicensed Trial";
  font-size: 200px;
  font-weight: 800;
  line-height: normal;
  letter-spacing: 12px;
`;

const Message = styled.div`
  color: #F1F7FB;
  color: color(display-p3 0.949 0.9686 0.9843);
  text-align: center;
  font-family: "ABC Diatype Rounded Variable Unlicensed Trial";
  font-size: 20px;
  font-weight: 800;
  line-height: normal;
  letter-spacing: 1.2px;
  height: 55px;
  width: 370px;
  padding-bottom: 16px;
`;

const ButtonStack = styled.div`
  display: flex;
  gap: 16px;
`;



const Trophy = styled.div`
  width: 137px;
  height: 127px;
  margin-bottom: 16px;
`;

const FinalScreen = ({ score, totalQuestions, onRetry, onRestart }) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  const animatedPercentage = useCountUp(percentage, 1000);
  
  return (
    <Container>
      <Trophy dangerouslySetInnerHTML={{ __html: `<svg width="137" height="127" viewBox="0 0 137 127" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.14 5.91943H21.4739L23.2278 14.4697H11.8274C10.1323 14.4697 8.75003 15.8483 8.83157 17.5414C10.2097 46.1591 30.5445 60.1009 32.8742 60.948C34.8035 61.6496 36.8936 60.2172 37.6975 59.4134L48.6593 69.9368C46.6624 69.9368 42.6464 69.8754 38.5125 69.6687C34.76 69.4811 30.998 68.8355 27.6358 67.1584C8.01026 57.3686 1.70598 31.8474 0.773013 16.3729C0.606223 13.6064 1.74574 10.9587 3.70547 8.99892C5.67724 7.02716 8.35152 5.91943 11.14 5.91943Z" fill="#FEE501"/>
        <path d="M125.86 5.91943H115.526L113.772 14.4697H125.173C126.868 14.4697 128.25 15.8483 128.168 17.5414C126.79 46.1591 106.455 60.1009 104.126 60.948C102.197 61.6496 100.106 60.2172 99.3025 59.4134L88.3407 69.9368C90.3376 69.9368 94.3536 69.8754 98.4875 69.6687C102.24 69.4811 106.002 68.8355 109.364 67.1584C128.99 57.3686 135.294 31.8474 136.227 16.3729C136.394 13.6064 135.254 10.9587 133.295 8.99892C131.323 7.02716 128.648 5.91943 125.86 5.91943Z" fill="#FEE501"/>
        <path d="M58.5244 98.9611V76.7334H67.9516H78.2558V98.9611C78.2558 107.874 85.4813 115.1 94.3946 115.1C96.2737 115.1 98.0759 115.846 99.4047 117.175L100.06 117.831C101.54 119.311 102.372 121.318 102.372 123.412V126.5H67.9516H34.4083V123.412C34.4083 121.318 35.2398 119.311 36.7199 117.831L37.3755 117.175C38.7042 115.846 40.5064 115.1 42.3856 115.1C51.2988 115.1 58.5244 107.874 58.5244 98.9611Z" fill="#F1CE17"/>
        <path d="M68.3901 82.4333C39.9867 82.4333 19.5758 46.7746 18.253 4.38532C18.1775 1.96487 20.1478 0 22.5694 0H114.649C117.071 0 119.042 1.96003 118.945 4.3797C117.499 40.3456 98.509 82.4333 68.3901 82.4333Z" fill="#FEE500"/>
        <path d="M63.3888 20.7575C64.7703 15.5366 72.1805 15.5366 73.562 20.7575L73.8423 21.8168C74.481 24.2303 76.7279 25.8628 79.2207 25.7244L80.3147 25.6636C85.707 25.3642 87.9969 32.4117 83.4584 35.3389L82.5376 35.9329C80.4395 37.2861 79.5813 39.9275 80.4832 42.2555L80.8791 43.2772C82.8302 48.3131 76.8352 52.6687 72.6488 49.2569L71.7994 48.5647C69.864 46.9875 67.0867 46.9875 65.1514 48.5647L64.302 49.2569C60.1155 52.6687 54.1206 48.3131 56.0717 43.2772L56.4675 42.2555C57.3695 39.9275 56.5112 37.2861 54.4132 35.9329L53.4924 35.3389C48.9539 32.4117 51.2437 25.3642 56.6361 25.6636L57.7301 25.7244C60.2229 25.8628 62.4698 24.2303 63.1085 21.8168L63.3888 20.7575Z" fill="white"/>
      </svg>` }} />
      <Score>{animatedPercentage}%</Score>
      <Message>Awesome job! you answered {score} of {totalQuestions} questions correctly!</Message>
      <ButtonStack>
        <PrimaryButton onClick={onRetry}>RETRY QUIZ</PrimaryButton>
        <SecondaryButton onClick={onRestart}>RESTART</SecondaryButton>
      </ButtonStack>
    </Container>
  );
};

export default FinalScreen;
