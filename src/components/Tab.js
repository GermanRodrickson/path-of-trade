import React from 'react';
import {
    Tab,
    SkullHover
} from '../styles/HeaderStyles'
import skullHover from '../../public/images/hover.png'

export default function Header(props) {
  const isActive = props.selectedTab.tabName === props.tabName
  return (
    <Tab onClick={() => props.selectTab(props.tabName)}>
      <p>{props.tabName}</p>
      <SkullHover active={isActive} src={skullHover}/>
    </Tab>
  );
}
