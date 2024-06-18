import React from 'react';
import { diff_match_patch } from 'diff-match-patch';

const dmp = new diff_match_patch();

function AnswerEvaluation({ userAnswer, correctAnswer }) {
  const diffs = dmp.diff_main(correctAnswer, userAnswer);
  dmp.diff_cleanupSemantic(diffs);

  return (
    <div className='answer-evaluation'>
      <h3>Evaluation:</h3>
      <p>
        {diffs.map((part, index) => {
          const color =
            part[0] === 0 ? 'black' : part[0] === -1 ? 'red' : 'green';
          return (
            <span key={index} style={{ color }}>
              {part[1]}
            </span>
          );
        })}
      </p>
    </div>
  );
}

export default AnswerEvaluation;
