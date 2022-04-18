import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import data from '../appData';
import bar from '../assets/Group 10.svg';

const Filter = () => {

  const [hover, setHover] = useState(null);
  const [days, setDays] = useState<any>(data);

  const FilterDiv = styled.div`
    margin-top: 10px;
      button {
        height: 32px;
        width: 92px;
        border: 1px solid #D9D9D9;
        background: #FFFFFF;
        color: 
      }
    `;

  const StyledStats = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;
    `;

    const StyledItem = styled.div`
      display: flex;
      flex-direction: column;
      margin-top: 10px;
    `;

    const Greendiv = styled.div`
      background-color: #8BC34A;
      width: 10px;
      height: 10px;
      border-radius: 50%;
    `;

    const Errorsdiv = styled.div`
      color: #4A4A4A;
      font-size: 16px;
      font-weight: 600;
      margin-left: 5px;
    `;

    const TheError = styled.div `
      display: flex;
      align-items: center;
    `;

    const StatDiv = styled.div`
      margin-top: 10px;
      display: flex;
      padding-left: 15px;
      color: #A0B0B9;
      font-size: 12px;
      font-weight: 600;
      line-height: 16.43px;
    `;

    const Stat = () => (
      <StyledItem>
          <TheError>
          <Greendiv />
          <Errorsdiv>
            Error: 0.12%
          </Errorsdiv>
          </TheError>
          <StatDiv>
            Average: 0.11%
          </StatDiv>
        </StyledItem>
    )
  return (
    <FilterDiv>
      <div style={{ display: 'flex'}}>
        <button onClick={() => setDays(data['errors_last_hour'])}>Last hour</button>

        <button onClick={() => setDays(data['errors_today'])}>Today</button>

        <button onClick={() => setDays(data['errors_last_3days'])}>Last 3 days</button>

        <button style={{background: '#2196F3', color: '#fff'}} onClick={() => setDays(data['errors_yesterday'])}>Yesterday</button>

        {/* {
          Object.keys(days).map((key, index) => {
            return (
              <div key={index}>
                <p>{key}</p>
                <p>{days[key]}</p>
              </div>
            )
          }
        )} */}

      </div>
      <StyledStats>
        <Stat />
        <Stat />
        <Stat />
      </StyledStats>
      <img src={bar} alt='' />
    </FilterDiv>
  )
}

export default Filter