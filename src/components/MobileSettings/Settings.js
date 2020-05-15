import React from "react";
import {
  Sketch,
  WifiContainer,
  Battery,
  Procent,
  Container1,
  Container3,
  Time,
  SettingsMenu,
} from "./Settings.styled";

const Settings = () => {
  return (
    <SettingsMenu>
      <Container1>
        <WifiContainer>
          <i className="fas fa-ellipsis-h"></i>
          <i className="fas fa-ellipsis-h"></i>
          <Sketch>Sketch</Sketch>
          <i className="fas fa-wifi"></i>
        </WifiContainer>
      </Container1>

      <Time>9:41 AM</Time>

      <Container3>
        <Battery>
          <Procent>100%</Procent>
          <i className="fas fa-battery-full"></i>
        </Battery>
      </Container3>
    </SettingsMenu>
  );
};

export default Settings;
