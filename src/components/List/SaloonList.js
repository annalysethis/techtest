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
import { FilterContainer, ArrowBox } from "./Filter.styled.js";

class SaloonList extends Component {
  constructor() {
    super();

    this.state = {
      value: "all",
      selectedSaloon: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  selectSaloon = (selectedSaloon = null) => {
    this.setState({ selectedSaloon });
  };
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  render() {
    const Saloons = () => {
      return ListData.filter((item) => {
        if (this.state.value === "all") {
          return item.price >= 0;
        } else if (this.state.value === "0-250") {
          return item.price >= 0 && item.price < 250;
        } else if (this.state.value === "250-500") {
          return item.price >= 250 && item.price < 500;
        } else if (this.state.value === "500-750") {
          return item.price >= 500 && item.price < 750;
        } else if (this.state.value === "750+") {
          return item.price >= 750;
        }
      }).map((item, index) => {
        return (
          <MainContainer key={index} id={item.id}>
            <Container4>
              <Clock>{item.clock}</Clock>

              <Container2>
                <SaloonName
                  id={item.id}
                  onClick={() => this.selectSaloon(item.id)}
                >
                  {item.name}
                </SaloonName>

                <Price>{item.price} kr</Price>
              </Container2>
            </Container4>

            <Container3>
              <i
                id={item.id}
                onClick={() => this.selectSaloon(item.id)}
                className="fas fa-angle-right"
              ></i>
              <StarRatings />
              <Time>{item.time}</Time>
            </Container3>

            <Address>{item.address}</Address>
          </MainContainer>
        );
      });
    };

    return (
      <div>
        {!this.state.selectedSaloon ? (
          <React.Fragment>
            <Header />
            <Nav
              selectSaloon={this.selectSaloon}
              selectedSaloon={this.state.selectedSaloon}
            />

            <FilterContainer>
              <form onSubmit={this.handleSubmit}>
                <select value={this.state.value} onChange={this.handleChange}>
                  <option value="all">Alla pris</option>
                  <option value="0-250">Pris 0 - 250</option>
                  <option value="250-500">Pris 250 - 500</option>
                  <option value="500-750">Pris 500 - 750</option>
                  <option value="750+">Pris 750+</option>
                </select>
              </form>
              <ArrowBox>
                <i className="fas fa-chevron-down"></i>
              </ArrowBox>
            </FilterContainer>
          </React.Fragment>
        ) : null}

        {!this.state.selectedSaloon ? (
          <Saloons />
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
