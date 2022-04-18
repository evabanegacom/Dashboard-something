import React from 'react';
import styled from 'styled-components';

const Header = () => {
    const HeaderDiv = styled.div`
    width: 100%;
    text-align: left;
      p {
          width: 139px;
          height: 28px;
          line-height: 24px;
          color: #4A4A4A;
          font-weight: 600;
      }
    `;

  return (
    <HeaderDiv><p>Main metrics</p></HeaderDiv>
  )
}

export default Header