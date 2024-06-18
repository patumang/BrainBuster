import React from 'react';

function QuestionList({ questions, currentQuestionId, setCurrentQuestionId }) {
  return (
    <div className='question-list'>
      <h2>Questions</h2>
      <ul>
        {questions.map((question) => (
          <li
            key={question.id}
            style={{
              cursor: 'pointer',
              fontWeight: question.id === currentQuestionId ? 'bold' : 'normal',
            }}
            onClick={() => setCurrentQuestionId(question.id)}
          >
            {question.question}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionList;
