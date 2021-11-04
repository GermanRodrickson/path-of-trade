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
import TradeViewer from './components/TradeViewer.js'
import RuneViewer from './components/RuneViewer.js'
import FAQViewer from './components/FAQViewer.js'
import GlobalStyles from './styles/GlobalStyles.js';


export function App() {
  const [selectedTab, setSelectedTab] = useState({tabName: 'Trade', component: <TradeViewer />});
  const tabs = [
    {
      tabName: 'Trade',
      component: <TradeViewer />
    },
    {
      tabName: 'Rune wizard',
      component: <RuneViewer />
    },
    {
      tabName: 'F.A.Q',
      component: <FAQViewer />
    }]
  const selectTab = (tab) => setSelectedTab(tabs.find(t => t.tabName === tab))

  return (
    <Wrapper>
      <TopBorder src={topBorderImage}/>
      <Header selectedTab={selectedTab} selectTab={selectTab} tabs={tabs}/>
      <TextWrapper>
        {selectedTab.component}
      </TextWrapper>
      <BottomBorder src={bottomBorderImage}/>
      <GlobalStyles />
    </Wrapper>
  );
}
