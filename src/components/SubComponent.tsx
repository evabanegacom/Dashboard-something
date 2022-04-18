import React from 'react';
import styled from 'styled-components';
import filter from '../assets/Group 11.svg';
import bar from '../assets/Combined Shape.svg';

const SubComponent = () => {
  const MainDiv = styled.div`
    display: flex;
    justify-content: space-between;
    padding-right: 3rem;
    margin: 15px 0;

  `;

  const SubDiv = styled.div`
    display: flex;
  `;

  const StyledItem = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const StyledStats = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15px;
  `;

  const Searches = styled.div`
    display: flex;
    align-items: center;
  `;

  const StyledSearches = styled.div`
    font-size: 16px;
    font-weight: 600;
  `;

  const New = styled.div`
    margin-left: 15px;
    background: #8BC34A;
    border-radius: 10px;
    color: #FFFFFF;
    font-size: 12px;
    font-weight: 600;
    width: 37px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const Numbers = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
  `;

  const Yesterday = styled.div`
    margin-left: 15px;
    font-size: 12px;
    font-weight: 400;
    line-height: 16.34px;
    color: #4A4A4A;
  `;

  const Number = styled.div`
    font-size: 20px;
    line-height: 28px;
    color: #4A4A4A;
  `;

  const LastFriday = styled.div`
  margin-left: 15px;
  font-size: 12px;
  font-weight: 400;
  line-height: 16.34px;
  color: #A0B0B9;
`;

const NumberFriday = styled.div`
  font-size: 20px;
  line-height: 28px;
  color: #A0B0B9;
`;

const Traffic = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`;

const MobileTraffic = styled.div`
    font-size: 16px;
    font-weight: 600;
    line-height: 28px;
`;

const Promo = styled.div`
  color: #A0B0B9;
  font-size: 12px;
  line-height: 16.34px;
`;

const Permission = styled.span`
  color: #2196F3;
  font-size: 12px;
  line-height: 17px;
`;

const Helpdiv = styled.div`
font-size: 12px;
line-height: 17px;
`;

  return (
    <MainDiv>
      <SubDiv>
          <StyledItem>
              <img src={filter} alt='bar'/>
              <img style={{height: '78px'}} src={bar} alt='bar'/>
          </StyledItem>
          <StyledStats>
              <Searches>
                  <StyledSearches>searches</StyledSearches>
                  <New>0.5%</New>
              </Searches>
              <Numbers>
                  <Number>29 380</Number>
                  <Yesterday>Yesterday</Yesterday>
              </Numbers>
              <Numbers>
                  <NumberFriday>29 380</NumberFriday>
                  <LastFriday>Last friday</LastFriday>
              </Numbers>
          </StyledStats>
      </SubDiv>
      <Traffic>
          <MobileTraffic>Mobile traffic: 100%</MobileTraffic>
          <MobileTraffic>Web traffic: 100%</MobileTraffic>
          <Promo>
          You get 100% traffic on mobile and desktop devices.
          </Promo>
          <Helpdiv>
             Help <Permission>searches</Permission> <Permission>permission</Permission>
          </Helpdiv>
      </Traffic>
    </MainDiv>
  )
}

export default SubComponent