import React from 'react';
import AnswerEvaluation from './AnswerEvaluation';

function QuestionDetail({
  question,
  userAnswer,
  onAnswerChange,
  setCurrentQuestionId,
  totalQuestions,
}) {
  const handlePrevious = () => {
    if (question.id > 1) {
      setCurrentQuestionId(question.id - 1);
    }
  };

  const handleNext = () => {
    if (question.id < totalQuestions) {
      setCurrentQuestionId(question.id + 1);
    }
  };

  return (
    <div className='question-detail'>
      <h2>{question.question}</h2>
      <textarea
        value={userAnswer}
        onChange={(e) => onAnswerChange(question.id, e.target.value)}
      />
      <AnswerEvaluation
        userAnswer={userAnswer}
        correctAnswer={question.answer}
      />
      <div>
        <button onClick={handlePrevious} disabled={question.id === 1}>
          Previous
        </button>
        <button onClick={handleNext} disabled={question.id === totalQuestions}>
          Next
        </button>
      </div>
    </div>
  );
}

export default QuestionDetail;
