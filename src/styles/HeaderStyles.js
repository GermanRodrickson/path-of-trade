
import styled from 'styled-components';
import menuBg from '../../public/images/menu_bg.png'


export const Title = styled.h1`
  text-align: center;
  color: #dcd4a4;
  padding-top: 15px;
  margin: 0;
  font-size: 30px;
  z-index: 10;
`;

export const Wrapper = styled.div`
  background-image: url(${menuBg});
  background-repeat: no-repeat;
`;

export const TabWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const SkullHover = styled.img`
  width: 75px;
  height: 25px;
  transition: .3s;
  opacity: ${props => props.active ? "1" : "0"};
`

export const Tab = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-transform: uppercase;
  align-items: center;
  position: relative;
  cursor: pointer;

  p {
    padding: 0;
    margin: 0;
  }
  &:hover ${SkullHover}{
    opacity: 1;
  }

`
