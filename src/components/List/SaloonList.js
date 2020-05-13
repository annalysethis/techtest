import React, { Component } from "react";
import ListData from "../data/saloons.json";
import {
  Container,
  Price,
  Container2,
  PriceBox,
  Container3,
  Container4,
  Headline,
  Address,
  Stars,
  Time,
  Clock,
  NumOfVotes,
  StyledLink,
} from "./List.styled";
import StarRatings from "./StarRatings";
import { Link } from "react-router-dom";
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
        <Header />
        <Nav
          selectSaloon={this.selectSaloon}
          selectedSaloon={this.state.selectedSaloon}
        />

        <ListFilter />
        {!this.state.selectedSaloon ? (
          ListData.map((listDetail, index) => {
            return (
              <Container
                key={index}
                id={listDetail.id}
                onClick={() => this.selectSaloon(listDetail.id)}
              >
                <Container4>
                  <div>
                    <Clock>{listDetail.clock}</Clock>
                  </div>

                  <Container2>
                    <div>
                      <StyledLink to="/SaloonView">
                        <Headline id={listDetail.id}>
                          {listDetail.name}
                        </Headline>
                      </StyledLink>
                    </div>
                    <PriceBox>
                      <Price>{listDetail.price} kr</Price>
                    </PriceBox>
                  </Container2>
                </Container4>
                <Container3>
                  <Stars>
                    <StarRatings />
                    <NumOfVotes>(30)</NumOfVotes>
                  </Stars>
                  <div>
                    <Time>{listDetail.time}</Time>
                  </div>
                </Container3>
                <Address>{listDetail.address}</Address>
              </Container>
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
