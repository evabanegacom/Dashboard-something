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

    const Horizontal = styled.hr`
    background: #A0B0B9;
    width: 80%;
    margin-left: 60px;
  `;
  return (
    <MainDiv>
        <SubComponent />
        <Horizontal />
        <SecondComponent />
        <Horizontal />
        <SubComponent />
    </MainDiv>
  )
}

export default Statistics