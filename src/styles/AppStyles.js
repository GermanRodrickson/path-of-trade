
import styled, { css } from 'styled-components';
import background from '../../public/images/bg_image.jpg'

export const Wrapper = styled.section`
  max-width: 360px;
  background-image: url(${background});
  background-repeat: no-repeat;
  height: 640px;
  position: relative;
  color: white;
`;

export const TopBorder = styled.img`
  position: absolute;
  width: 100%;
  top: 0;
  height: 100%;
  max-height: 60px;
`

export const BottomBorder = styled.img`
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 100%;
  max-height: 60px;
`

export const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: #1a0841;
  border: 1px solid #1a0841;

  ${props =>
    props.primary &&
    css`
      background: #4f9da6;
      border: 2px solid #4f9da6;
      color: white;
    `};
`;

export const TextWrapper = styled.article`
  text-align: center;
`;
