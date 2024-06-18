import React from 'react';
import { Box, Typography } from '@mui/material';

function AnswerEvaluation({ userAnswer, correctAnswer }) {
  // Function to compare user answer with correct answer and generate evaluation result
  const evaluateAnswer = (userAnswer, correctAnswer) => {
    const evaluationResult = [];
    let userIndex = 0;
    let correctIndex = 0;

    while (
      userIndex < userAnswer.length &&
      correctIndex < correctAnswer.length
    ) {
      const userChar = userAnswer[userIndex].toLowerCase(); // Convert to lowercase
      let correctChar = correctAnswer[correctIndex].toLowerCase(); // Convert to lowercase

      if (
        (correctChar === ',' && userChar !== ',') ||
        (correctChar === '.' && userChar !== '.')
      ) {
        // Skip over commas and dots in correct answer
        correctIndex++;
        correctChar = correctAnswer[correctIndex].toLowerCase(); // Convert to lowercase
      }

      if (userChar === correctChar) {
        evaluationResult.push({ char: userAnswer[userIndex], correct: true });
        correctIndex++;
      } else if (userChar === ',' || userChar === '.') {
        // Skip over commas and dots in user answer
        evaluationResult.push({ char: userAnswer[userIndex], correct: true });
      } else {
        evaluationResult.push({ char: userAnswer[userIndex], correct: false });
      }

      userIndex++;
    }

    // Add remaining characters from userAnswer in case it's longer than correctAnswer
    while (userIndex < userAnswer.length) {
      evaluationResult.push({ char: userAnswer[userIndex], correct: false });
      userIndex++;
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
