import React from 'react';
import { Container } from '@mui/material';
import Calculator from './components/Calculator';
import "./App.css"

const App: React.FC = () => {
  return (
    <Container>
      <Calculator />
    </Container>
  );
};

export default App;
