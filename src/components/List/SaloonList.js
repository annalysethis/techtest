import React, { Component } from "react";
import ListData from "../data/saloons.json";
import {
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
import SaloonView from "../SaloonView";
import Nav from "../Navigation/Nav";
import Filter from "../Filter/Filter";

class SaloonList extends Component {
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
      <div>
        {!this.state.selectedSaloon ? (
          <React.Fragment>
            <Header />
            <Nav
              selectSaloon={this.selectSaloon}
              selectedSaloon={this.state.selectedSaloon}
            />
            <Filter />
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
                  <i
                    id={listDetail.id}
                    onClick={() => this.selectSaloon(listDetail.id)}
                    className="fas fa-angle-right"
                  ></i>
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
