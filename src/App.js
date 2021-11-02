import React, { useState } from 'react';
import {
    Wrapper,
    TopBorder,
    BottomBorder,
    TextWrapper
} from './styles/AppStyles'
import bottomBorderImage from '../public/images/bottom_border.png'
import topBorderImage from '../public/images/top_border.png'
import Header from './Header.js'
import GlobalStyles from './styles/GlobalStyles.js';


export function App() {
  const tabs = [
    {
      text: 'Trade'
    },
    {
      text: 'Rune wizard'
    },
    {
      text: 'F.A.Q'
    }]
  const [selectedTab, setSelectedTab] = useState('Trade');

  return (
    <Wrapper>
      <TopBorder src={topBorderImage}/>
      <Header selectedTab={selectedTab} tabs={tabs}/>
      <TextWrapper>
        Hello world
      </TextWrapper>
      <BottomBorder src={bottomBorderImage}/>
      <GlobalStyles />
    </Wrapper>
  );
}
