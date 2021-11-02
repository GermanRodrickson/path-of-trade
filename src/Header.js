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
          return <Tab selectedTab={props.selectedTab} text={value.text} key={index}/>
        })}
      </TabWrapper>
    </Wrapper>
  );
}
