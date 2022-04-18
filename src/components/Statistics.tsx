import React from 'react';
import styled from 'styled-components';
import SubComponent from './SubComponent';
import SecondComponent from './SecondComponent';

const Statistics = () => {
  
  const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
  `;
  return (
    <MainDiv>
        <SubComponent />
        <SecondComponent />
        <SubComponent />
    </MainDiv>
  )
}

export default Statistics