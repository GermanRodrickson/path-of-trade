import React from 'react';
import {
    Tab,
    SkullHover
} from '../styles/HeaderStyles'
import skullHover from '../../public/images/hover.png'

export default function Header(props) {
  const isActive = props.selectedTab === props.text
  return (
    <Tab>
      <p>{props.text}</p>
      <SkullHover active={isActive} src={skullHover}/>
    </Tab>
  );
}
