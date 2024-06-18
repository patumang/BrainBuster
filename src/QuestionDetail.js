import React, { useEffect, useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import AnswerEvaluation from './AnswerEvaluation';
import { diff_match_patch } from 'diff-match-patch';

const dmp = new diff_match_patch();

function QuestionDetail({
  question,
  userAnswer,
  onAnswerChange,
  setCurrentQuestionId,
  totalQuestions,
  mistakes,
}) {
  const [mistakesCount, setMistakesCount] = useState(mistakes);

  useEffect(() => {
    const diffs = dmp.diff_main(question.answer, userAnswer);
    dmp.diff_cleanupSemantic(diffs);
    const count = diffs.filter((part) => part[0] !== 0).length;
    setMistakesCount(count);
    onAnswerChange(question.id, userAnswer, count);
  }, [userAnswer, question.answer, onAnswerChange, question.id]);

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
        onChange={(e) =>
          onAnswerChange(question.id, e.target.value, mistakesCount)
        }
        variant='outlined'
        margin='normal'
      />
      <AnswerEvaluation
        userAnswer={userAnswer}
        correctAnswer={question.answer}
      />
      <Typography variant='body1' color='error'>
        Mistakes: {mistakesCount}
      </Typography>
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
