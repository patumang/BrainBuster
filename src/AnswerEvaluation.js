import React from 'react';
import { Box, Typography } from '@mui/material';

function AnswerEvaluation({ userAnswer, correctAnswer }) {
  // Function to compare user answer with correct answer and generate evaluation result
  const evaluateAnswer = (userAnswer, correctAnswer) => {
    const evaluationResult = [];
    const minLength = Math.min(userAnswer.length, correctAnswer.length);

    for (let i = 0; i < minLength; i++) {
      const userChar = userAnswer[i].toLowerCase(); // Convert to lowercase
      const correctChar = correctAnswer[i].toLowerCase(); // Convert to lowercase

      if (userChar === correctChar) {
        evaluationResult.push({ char: userAnswer[i], correct: true });
      } else {
        evaluationResult.push({ char: userAnswer[i], correct: false });
      }
    }

    // Add remaining characters from userAnswer in case it's longer than correctAnswer
    for (let i = minLength; i < userAnswer.length; i++) {
      evaluationResult.push({ char: userAnswer[i], correct: false });
    }

    return evaluationResult;
  };

  // Get the evaluation result
  const evaluation = evaluateAnswer(userAnswer, correctAnswer);

  return (
    <Box mt={2}>
      <Typography variant='body1' component='div'>
        {evaluation.map((item, index) => (
          <span key={index} style={{ color: item.correct ? 'green' : 'red' }}>
            {item.char}
          </span>
        ))}
      </Typography>
    </Box>
  );
}

export default AnswerEvaluation;
