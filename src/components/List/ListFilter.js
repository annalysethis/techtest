import { FilterContainer } from "./List.styled";
import React, { Component } from "react";
import ListData from "../data/saloons.json";
import {
  MainContainer,
  Price,
  Container2,
  Container3,
  SaloonName,
  Address,
  SelectBtn,
  StyledSelect,
} from "./List.styled";
import SelectBox from "./SelectBox";

class ListFilter extends Component {
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
          <MainContainer key={item.id}>
            <Container2>
              <div>
                <SaloonName>{item.name}</SaloonName>
              </div>

              <Price>{item.price} kr</Price>
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
          </MainContainer>
        );
      });
    };

    return (
      <div>
        <FilterContainer>
          {/* <SelectBox
            items={[
              { value: "0-250", id: 1 },
              { value: "250-500", id: 2 },
              { value: "500-750", id: 3 },
              { value: "750+", id: 4 },
            ]}
          /> */}
          {/* <SelectBtn>^</SelectBtn> */}
          <form onSubmit={this.handleSubmit}>
            <label>
              Filter:
              <StyledSelect
                selectvalue={this.state.value}
                onChange={this.handleChange}
              >
                <option value="all">Alla pris</option>
                <option value="0-250">Pris 0 - 250</option>
                <option value="250-500">Pris 250 - 500</option>
                <option value="500-750">Pris 500 - 750</option>
                <option value="750+">Pris 750+</option>
              </StyledSelect>
            </label>
            {/* <input type="submit" value="Submit" /> */}
          </form>
        </FilterContainer>
        {/* <Saloons /> */}
      </div>
    );
  }
}
export default ListFilter;
