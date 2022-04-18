import React from 'react';
import Header from './components/Header';
import Filter from './components/Filter';
import Statistics from './components/Statistics';
import styled from 'styled-components';
import './App.css';

function App() {

  const AppDiv = styled.div`
    background: #FFFFFF;
    padding: 1rem 5rem 1rem 2rem;
    border-radius: 5px;
  `;
  return (
    <AppDiv className="App">
      <Header />
      <Filter />
      <Statistics />
    </AppDiv>
  );
}

export default App;
