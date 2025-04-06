import React, { useState } from 'react';
import styled from '@emotion/styled';
import QuestionBubble from '../QuestionBubble/QuestionBubble';
import Upload from '../Upload/Upload';
import { PrimaryButton, SecondaryButton } from '../Button/Button';

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
  width: 523px; /* Match QuestionBubble width */
`;

const BubbleWrapper = styled.div`
  position: absolute;
  top: -120px;
  left: 0;
  width: 100%;
  z-index: 2;

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

const UploadContainer = styled.div`
  position: relative;
  background: color(display-p3 0.0824 0.1216 0.1412);
  background: #121F25; /* Fallback */
  border-radius: 24px;
  padding: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const ButtonStack = styled.div`
  display: flex;
  gap: 16px;
`;

const UploadScreen = ({ onStart }) => {
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileSelect = (file) => {
    setUploadedFile(file);
  };

  const handleCancelUpload = () => {
    setUploadedFile(null);
  };

  const handleStartQuiz = () => {
    onStart();
  };

  return (
    <ScreenContainer>
      <ContentWrapper>
        <BubbleWrapper>
          <QuestionBubble>
            Are you ready to study?{"\n"}
            Upload your study material to get started!
          </QuestionBubble>
        </BubbleWrapper>
        <UploadContainer>
          <Upload 
            isUploaded={!!uploadedFile}
            fileName={uploadedFile?.name}
            onFileSelect={handleFileSelect}
          />
          {uploadedFile && (
            <ButtonStack>
              <SecondaryButton onClick={handleCancelUpload}>CANCEL UPLOAD</SecondaryButton>
              <PrimaryButton onClick={handleStartQuiz}>START QUIZ</PrimaryButton>
            </ButtonStack>
          )}
        </UploadContainer>
      </ContentWrapper>
    </ScreenContainer>
  );
};

export default UploadScreen;
