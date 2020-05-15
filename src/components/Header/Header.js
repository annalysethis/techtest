import React from "react";
import { HeaderMenu, Headline, EqualizerImg } from "./Header.styled";
import Equalizer from "../../img/equalizer_gold2.jpg";
import Settings from "../MobileSettings/Settings";

const Header = () => {
  return (
    <HeaderMenu>
      <Settings />
      <Headline>Hår</Headline>
      <EqualizerImg alt="Equalizer" src={Equalizer}></EqualizerImg>
    </HeaderMenu>
  );
};

export default Header;
