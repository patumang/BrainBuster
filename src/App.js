import React, { useState, useEffect } from 'react';
import QuestionList from './QuestionList';
import QuestionDetail from './QuestionDetail';
import questions from './questions.json';

function App() {
  const [currentQuestionId, setCurrentQuestionId] = useState(questions[0].id);
  const [userAnswers, setUserAnswers] = useState({});

  const handleAnswerChange = (id, answer) => {
    setUserAnswers({
      ...userAnswers,
      [id]: answer,
    });
  };

  return (
    <div className='App'>
      <QuestionList
        questions={questions}
        currentQuestionId={currentQuestionId}
        setCurrentQuestionId={setCurrentQuestionId}
      />
      <QuestionDetail
        question={questions.find((q) => q.id === currentQuestionId)}
        userAnswer={userAnswers[currentQuestionId] || ''}
        onAnswerChange={handleAnswerChange}
        setCurrentQuestionId={setCurrentQuestionId}
        totalQuestions={questions.length}
      />
    </div>
  );
}

export default App;
