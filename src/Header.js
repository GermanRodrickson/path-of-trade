import React from 'react';
import {
    Title,
    Wrapper,
    TabWrapper,
} from './styles/HeaderStyles'
import Tab from './components/Tab.js'

export default function Header(props) {
  return (
    <Wrapper>
      <Title>Path of Tade</Title>
      <TabWrapper>
        {props.tabs.map((value, index) => {
          return <Tab selectTab={props.selectTab} selectedTab={props.selectedTab} tabName={value.tabName} key={index}/>
        })}
      </TabWrapper>
    </Wrapper>
  );
}
