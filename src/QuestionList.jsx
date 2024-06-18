import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Typography,
} from '@mui/material';

function QuestionList({ questions, currentQuestionId, setCurrentQuestionId }) {
  return (
    <div className='question-list'>
      <Typography variant='h6' component='h2'>
        Questions
      </Typography>
      <List>
        {questions.map((question) => (
          <ListItem key={question.id} disablePadding>
            <ListItemButton
              selected={question.id === currentQuestionId}
              onClick={() => setCurrentQuestionId(question.id)}
            >
              <ListItemText primary={question.question} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default QuestionList;
