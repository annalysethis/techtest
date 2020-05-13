import { FilterContainer } from "./List.styled";
import React, { Component } from "react";
import ListData from "../data/saloons.json";
import {
  Container,
  Price,
  Container2,
  PriceBox,
  Container3,
  Headline,
  Address,
} from "./List.styled";

class SaloonList extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "all" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    console.log("The chosen value is: " + this.state.value);
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  render() {
    const emptyMsg = () => {
      return <p>Nothing to show.</p>;
    };
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
      }).map((item) => {
        return (
          <Container key={item.id}>
            <Container2>
              <div>
                <Headline>{item.name}</Headline>
              </div>
              <PriceBox>
                <Price>{item.price} kr</Price>
              </PriceBox>
            </Container2>
            <Container3>
              <div>
                <p>{item.stars} (30)</p>
              </div>
              <div>
                <p>{item.time}</p>
              </div>
            </Container3>
            <Address>{item.address}</Address>
          </Container>
        );
      });
    };

    return (
      <div>
        <FilterContainer>
          <form onSubmit={this.handleSubmit}>
            <label>
              Filter:
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="all">Alla pris</option>
                <option value="0-250">Pris 0 - 250</option>
                <option value="250-500">Pris 250 - 500</option>
                <option value="500-750">Pris 500 - 750</option>
                <option value="750+">Pris 750+</option>
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form>
        </FilterContainer>
        {/* <Saloons /> */}
      </div>
    );
  }
}
export default SaloonList;
