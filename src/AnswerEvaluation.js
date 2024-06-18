import React from 'react';
import { Box, Typography } from '@mui/material';
import { diff_match_patch } from 'diff-match-patch';

const dmp = new diff_match_patch();

function AnswerEvaluation({ userAnswer, correctAnswer }) {
  const diffs = dmp.diff_main(correctAnswer, userAnswer);
  dmp.diff_cleanupSemantic(diffs);

  return (
    <Box mt={2}>
      <Typography variant='body1' component='div'>
        {diffs.map((part, index) => {
          const color =
            part[0] === 0 ? 'inherit' : part[0] === -1 ? 'red' : 'green';
          return (
            <span key={index} style={{ color }}>
              {part[1]}
            </span>
          );
        })}
      </Typography>
    </Box>
  );
}

export default AnswerEvaluation;
