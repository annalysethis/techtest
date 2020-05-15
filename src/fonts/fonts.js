import { createGlobalStyle } from "styled-components";
import MillerBanner from "./FontBureau-MillerBannerLight.otf";

export default createGlobalStyle`
@font-face {
  font-family: 'MillerBanner';
  src: local('MillerBanner'),
  url(${MillerBanner}) format('otf');
  font-weight: 400;
  font-style: normal;
}
`;
