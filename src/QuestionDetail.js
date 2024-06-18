import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
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
    <Box p={2}>
      <Typography variant='h6' component='h2'>
        {question.question}
      </Typography>
      <TextField
        fullWidth
        multiline
        minRows={4}
        value={userAnswer}
        onChange={(e) => onAnswerChange(question.id, e.target.value)}
        variant='outlined'
        margin='normal'
      />
      <AnswerEvaluation
        userAnswer={userAnswer}
        correctAnswer={question.answer}
      />
      <Box mt={2}>
        <Button
          variant='contained'
          onClick={handlePrevious}
          disabled={question.id === 1}
        >
          Previous
        </Button>
        <Button
          variant='contained'
          color='primary'
          onClick={handleNext}
          disabled={question.id === totalQuestions}
          sx={{ ml: 2 }}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}

export default QuestionDetail;
