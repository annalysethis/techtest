import React, { Component } from "react";
import {
  HeaderMenu,
  Headline,
  Sketch,
  WifiContainer,
  Battery,
  Procent,
  Container2,
  Container1,
  Container3,
  Container4,
  Container5,
  EqualizerImg,
  Time,
  Arrow,
  Arrow2,
  BackBtn,
} from "./Header.styled";
import Equalizer from "../../img/equalizer_gold2.jpg";
import Nav from "../Navigation/Nav";
import SaloonView from "../SaloonView";

// const Header = (props) => {
//   return (
//     <HeaderMenu>
//       <Container1>
//         <WifiContainer>
//           <i className="fas fa-ellipsis-h"></i>
//           <i className="fas fa-ellipsis-h"></i>
//           <Sketch>Sketch</Sketch>
//           <i className="fas fa-wifi"></i>
//         </WifiContainer>

//         {/* <Container2>
//           <BackBtn>
//             <Arrow> / </Arrow>
//             <Arrow2> \ </Arrow2>
//           </BackBtn>
//         </Container2> */}
//       </Container1>
//       <Container5>
//         <Time>9:41 AM</Time>
//         <Headline>Hår</Headline>
//       </Container5>
//       <Container3>
//         <Battery>
//           <Procent>100%</Procent>
//           <i className="fas fa-battery-full"></i>
//         </Battery>
//         <Container4>
//           <EqualizerImg alt="Equalizer" src={Equalizer}></EqualizerImg>
//         </Container4>
//       </Container3>
//     </HeaderMenu>
//   );
// };

export class Header extends Component {
  constructor() {
    super();

    this.state = {
      selectedSaloon: null,
    };
  }
  selectSaloon = (selectedSaloon = null) => {
    this.setState({ selectedSaloon });
  };
  render() {
    return (
      <HeaderMenu>
        <Container1>
          <WifiContainer>
            <i className="fas fa-ellipsis-h"></i>
            <i className="fas fa-ellipsis-h"></i>
            <Sketch>Sketch</Sketch>
            <i className="fas fa-wifi"></i>
          </WifiContainer>
          {/* <Nav
            selectSaloon={this.selectSaloon}
            selectedSaloon={this.state.selectedSaloon}
          /> */}
          {/* <Container2>
          <BackBtn>
            <Arrow> / </Arrow>
            <Arrow2> \ </Arrow2>
          </BackBtn>
        </Container2> */}
        </Container1>
        <Container5>
          <Time>9:41 AM</Time>
          <Headline>Hår</Headline>
        </Container5>
        <Container3>
          <Battery>
            <Procent>100%</Procent>
            <i className="fas fa-battery-full"></i>
          </Battery>
          <Container4>
            <EqualizerImg alt="Equalizer" src={Equalizer}></EqualizerImg>
          </Container4>
        </Container3>
      </HeaderMenu>
    );
  }
}

export default Header;
