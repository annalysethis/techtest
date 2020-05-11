import { createGlobalStyle } from "styled-components";
import MillerBanner from "./LincolnMillerBannerRomanRoman.ttf";
import MillerBanner1 from "./FontBureau-MillerBannerLight.otf";

export default createGlobalStyle`
@font-face {
  font-family: 'MillerBanner';
  src: local('Font Name'), local('FontName'),
  url(${MillerBanner}) format('ttf'),
  font-weight: 300;
  font-style: normal;
}
`;
