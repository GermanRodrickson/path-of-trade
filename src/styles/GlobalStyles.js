import { createGlobalStyle } from "styled-components";
// https://github.com/parcel-bundler/parcel/issues/5305#issuecomment-720160931
import KadwaBold from 'url:../../public/fonts/Kadwa-Bold.ttf'
import KadwaRegular from 'url:../../public/fonts/Kadwa-Regular.ttf'

export default createGlobalStyle`
  @font-face {
    font-family: 'Kadwa';
    src: local('Kadwa'), local('Kadwa'),
    url(${KadwaBold}) format('truetype'),
    url(${KadwaRegular}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  body {
    font-family: 'Kadwa';
  }
`;
