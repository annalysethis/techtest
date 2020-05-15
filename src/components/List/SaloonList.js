import React, { Component } from "react";
import ListData from "../data/saloons.json";
import {
  Container,
  Price,
  Container2,
  Container3,
  Container4,
  Address,
  Time,
  Clock,
  SaloonName,
  MainContainer,
} from "./List.styled";
import StarRatings from "./StarRatings";
import Header from "../Header";
import ListFilter from "./ListFilter";
import SaloonView from "../SaloonView";
import Nav from "../Navigation/Nav";

class SaloonList extends Component {
  constructor() {
    super();

    this.state = {
      selectedSaloon: null,
    };
  }
  selectSaloon = (selectedSaloon = null) => {
    this.setState({ selectedSaloon });
  }; // anropa med ett id och id:t sätt. anropa utan argument och selectedSaloon sätts till null
  render() {
    return (
      <div>
        {!this.state.selectedSaloon ? (
          <React.Fragment>
            <Header />
            <Nav
              selectSaloon={this.selectSaloon}
              selectedSaloon={this.state.selectedSaloon}
            />
            <ListFilter />
          </React.Fragment>
        ) : null}

        {!this.state.selectedSaloon ? (
          ListData.map((listDetail, index) => {
            return (
              <MainContainer key={index} id={listDetail.id}>
                <Container4>
                  <Clock>{listDetail.clock}</Clock>

                  <Container2>
                    <SaloonName
                      id={listDetail.id}
                      onClick={() => this.selectSaloon(listDetail.id)}
                    >
                      {listDetail.name}
                    </SaloonName>

                    <Price>{listDetail.price} kr</Price>
                  </Container2>
                </Container4>

                <Container3>
                  <StarRatings />
                  <Time>{listDetail.time}</Time>
                </Container3>

                <Address>{listDetail.address}</Address>
              </MainContainer>
            );
          })
        ) : (
          <SaloonView
            id={this.state.selectedSaloon}
            selectSaloon={this.selectSaloon}
          />
        )}
      </div>
    );
  }
}

export default SaloonList;
