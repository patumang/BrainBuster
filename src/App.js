import React, { useState } from 'react';
import { Container, Grid, Typography, Paper, CssBaseline } from '@mui/material';
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
    <CssBaseline>
      <Container maxWidth='lg'>
        <Typography variant='h2' component='h1' gutterBottom>
          Question and Answer App
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Paper>
              <QuestionList
                questions={questions}
                currentQuestionId={currentQuestionId}
                setCurrentQuestionId={setCurrentQuestionId}
              />
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <Paper>
              <QuestionDetail
                question={questions.find((q) => q.id === currentQuestionId)}
                userAnswer={userAnswers[currentQuestionId] || ''}
                onAnswerChange={handleAnswerChange}
                setCurrentQuestionId={setCurrentQuestionId}
                totalQuestions={questions.length}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </CssBaseline>
  );
}

export default App;
