import React from 'react';
import React, { useState } from 'react';

function App() {
  return (
    <div>
      <QuizApp />
    </div>
  );
}

import React, { useState } from 'react';

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Madrid'],
    correctAnswer: 'Paris'
  },
  {
    question: 'What is 2 + 2?',
    options: ['3', '4', '5', '6'],
    correctAnswer: '4'
  },
  {
    question: 'Who wrote Hamlet?',
    options: ['William Shakespeare', 'Charles Dickens', 'Mark Twain', 'Jane Austen'],
    correctAnswer: 'William Shakespeare'
  }
];

function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    setShowResult(true);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer('');
      setShowResult(false);
    } else {
      // Quiz finished
      // You can add your logic here, like showing a message or resetting the quiz
      console.log('Quiz finished!');
    }
  };

  return (
    <div>
      <h1>Quiz Application</h1>
      {showResult ? (
        <div>
          <p>{selectedAnswer === questions[currentQuestion].correctAnswer ? 'Correct!' : 'Incorrect!'}</p>
          <button onClick={nextQuestion}>Next Question</button>
        </div>
      ) : (
        <div>
          <h2>{questions[currentQuestion].question}</h2>
          <ul>
            {questions[currentQuestion].options.map((option, index) => (
              <li key={index} onClick={() => handleAnswerSelect(option)}>
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default QuizApp;
