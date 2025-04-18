import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainContent from './components/MainContent/MainContent';
import QuestionBubble from './components/QuestionBubble/QuestionBubble';
import FinalScreen from './components/FinalScreen/FinalScreen';
import UploadScreen from './components/UploadScreen/UploadScreen';
import DifficultyScreen from './components/DifficultyScreen/DifficultyScreen';
import styled from '@emotion/styled';

const AppContainer = styled.div`
  min-height: 100vh;
  background: color(display-p3 0.0824 0.1216 0.1412);
  background: #121F25; /* Fallback */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Constants for localStorage keys
const STORAGE_KEYS = {
  QUESTIONS: 'quiz_questions',
  CURRENT_INDEX: 'quiz_current_index',
  POINTS: 'quiz_points',
  PROGRESS: 'quiz_progress'
};

function App() {
  // App state
  const [currentScreen, setCurrentScreen] = useState('upload'); // 'upload', 'difficulty', 'quiz', 'final'
  const [numQuestions, setNumQuestions] = useState(null);
  
  // Core quiz state
  const [questions, setQuestions] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.QUESTIONS);
    return saved ? JSON.parse(saved) : [
      {
        question: 'Which of the following clinical findings is NOT a characteristic of HELLP syndrome?',
        answers: [
          { letter: 'A', text: 'Hemolysis', isCorrect: false },
          { letter: 'B', text: 'Hypoglycemia', isCorrect: true },
          { letter: 'C', text: 'Elevated liver enzymes', isCorrect: false },
          { letter: 'D', text: 'Low platelet count', isCorrect: false }
        ]
      },
      {
        question: 'Which condition can be confused with HELLP syndrome due to overlapping symptoms?',
        answers: [
          { letter: 'A', text: 'Acute fatty liver of pregnancy (AFLP)', isCorrect: true },
          { letter: 'B', text: 'Preeclampsia without severe features', isCorrect: false },
          { letter: 'C', text: 'Gestational hypertension', isCorrect: false },
          { letter: 'D', text: 'Postpartum hemorrhage', isCorrect: false }
        ]
      },
      {
        question: 'Which of the following is the best approach to managing postpartum preeclampsia?',
        answers: [
          { letter: 'A', text: 'Immediate cesarean delivery', isCorrect: false },
          { letter: 'B', text: 'Magnesium sulfate administration for 24 hours postpartum', isCorrect: true },
          { letter: 'C', text: 'Restricting fluid intake to prevent pulmonary edema', isCorrect: false },
          { letter: 'D', text: 'Daily intravenous administration of antihypertensives', isCorrect: false }
        ]
      },
      {
        question: 'What is the primary treatment for acute fatty liver of pregnancy?',
        answers: [
          { letter: 'A', text: 'High-dose steroids', isCorrect: false },
          { letter: 'B', text: 'Immediate delivery of the baby', isCorrect: true },
          { letter: 'C', text: 'Intravenous magnesium sulfate', isCorrect: false },
          { letter: 'D', text: 'Antihypertensive therapy', isCorrect: false }
        ]
      }
    ];
  });

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.CURRENT_INDEX);
    return saved ? parseInt(saved, 10) : 0;
  });

  const [points, setPoints] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.POINTS);
    return saved ? parseInt(saved, 10) : 0;
  });

  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.PROGRESS);
    return saved ? parseInt(saved, 10) : 0;
  });

  // Update progress when question index changes
  useEffect(() => {
    // Calculate progress as percentage of questions completed
    const newProgress = Math.round((currentQuestionIndex / (questions.length - 1)) * 100);
    setProgress(newProgress);
  }, [currentQuestionIndex, questions.length]);

  // UI state (resets on refresh)
  const [quizState, setQuizState] = useState({
    answerSelected: null,
    answerRevealed: false,
    showingNext: false,
    timerKey: 0
  });

  // Persist state changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.QUESTIONS, JSON.stringify(questions));
    localStorage.setItem(STORAGE_KEYS.CURRENT_INDEX, currentQuestionIndex.toString());
    localStorage.setItem(STORAGE_KEYS.POINTS, points.toString());
    localStorage.setItem(STORAGE_KEYS.PROGRESS, progress.toString());
  }, [questions, currentQuestionIndex, points, progress]);

  const handleExit = () => {
    // Clear stored state
    Object.values(STORAGE_KEYS).forEach(key => localStorage.removeItem(key));
    // Reset all state
    setPoints(0);
    setCurrentQuestionIndex(0);
    setProgress(0);
    setQuizState({
      answerSelected: null,
      answerRevealed: false,
      showingNext: false,
      timerKey: 0
    });
  };

  const handleCheckAnswer = () => {
    setQuizState(prev => ({
      ...prev,
      answerRevealed: true,
      showingNext: true
    }));
  };

  const handleNext = () => {
    const nextIndex = currentQuestionIndex + 1;
    
    // Reset quiz state
    setQuizState(prev => ({
      ...prev,
      answerSelected: null,
      answerRevealed: false,
      showingNext: false,
      timerKey: prev.timerKey + 1
    }));
    
    // Check if we've reached the number of questions selected
    if (nextIndex >= numQuestions) {
      setCurrentScreen('final');
    } else {
      setCurrentQuestionIndex(nextIndex);
    }
  };

  const handleSkip = () => {
    handleNext(); // Same behavior as next for now
  };

  const handleTimeout = () => {
    setQuizState(prev => ({
      ...prev,
      answerRevealed: true,
      showingNext: true
    }));
  };

  const handleAnswerSelect = (letter) => {
    // Prevent selection if answer is already revealed
    if (quizState.answerRevealed) {
      return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    const selectedAnswer = currentQuestion.answers.find(a => a.letter === letter);

    // Update quiz state regardless of answer correctness
    setQuizState(prev => ({
      ...prev,
      answerSelected: letter,
      answerRevealed: true,
      showingNext: true
    }));

    // Award points only for correct answers
    if (selectedAnswer.isCorrect) {
      setPoints(prev => {
        const newPoints = prev + 1;
        localStorage.setItem(STORAGE_KEYS.POINTS, newPoints.toString());
        return newPoints;
      });
    }
  };

  // Only access currentQuestion when in quiz screen
  const currentQuestion = currentScreen === 'quiz' ? questions[currentQuestionIndex] : null;

  // Check for quiz completion in useEffect to avoid render-path state updates
  useEffect(() => {
    if (currentQuestionIndex >= numQuestions - 1 && quizState.answerRevealed && currentScreen !== 'final') {
      setCurrentScreen('final');
    }
  }, [currentQuestionIndex, numQuestions, quizState.answerRevealed, currentScreen]);

  return (
    <AppContainer>
      {currentScreen === 'upload' ? (
        <UploadScreen onStart={() => setCurrentScreen('difficulty')} />
      ) : currentScreen === 'difficulty' ? (
        <DifficultyScreen 
          onSelectDifficulty={(num) => {
            setNumQuestions(num);
            setCurrentScreen('quiz');
          }} 
        />
      ) : currentScreen === 'quiz' && currentQuestion ? (
        <>
          <Header
            progress={progress}
            points={points * 5} // Each correct answer is worth 5 points
            onExit={handleExit}
            onCheckAnswer={handleCheckAnswer}
          />
          <MainContent
            question={currentQuestion.question}
            answers={currentQuestion.answers}
            selectedAnswer={quizState.answerSelected}
            answerRevealed={quizState.answerRevealed}
            onAnswerSelect={handleAnswerSelect}
          />
          <Footer 
            onCheck={handleCheckAnswer}
            onSkip={handleSkip}
            onNext={handleNext}
            onTimeout={handleTimeout}
            initialTime={90} // 1:30 in seconds
            key={quizState.timerKey} // Forces timer reset
            showNext={quizState.showingNext}
          />
        </>
      ) : (
        <FinalScreen
          score={points}
          totalQuestions={numQuestions}
          onRetry={() => {
            setCurrentQuestionIndex(0);
            setPoints(0);
            setProgress(0);
            setQuizState({
              answerSelected: null,
              answerRevealed: false,
              showingNext: false,
              timerKey: 0
            });
          }}
          onRestart={handleExit}
        />
      )}
    </AppContainer>
  );
}

export default App;
