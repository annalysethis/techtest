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
  render() {
    /*     const Stars = ({ listDetail }) => {
      if (listDetail.stars == 4) {
        return <div>Stars: ${listDetail.stars}</div>;
      }
    }; */
    return (
      <div>
        {ListData.map((listDetail, index) => {
          return (
            <Container id={listDetail.id}>
              <Container2>
                <div>
                  <Headline>{listDetail.name}</Headline>
                </div>
                <PriceBox>
                  <Price>{listDetail.price} kr</Price>
                </PriceBox>
              </Container2>
              <Container3>
                <div>
                  <p>{listDetail.stars} (30)</p>
                </div>
                <div>
                  <p>{listDetail.time}</p>
                </div>
              </Container3>
              <Address>{listDetail.address}</Address>
            </Container>
          );
        })}
      </div>
    );
  }
}

export default SaloonList;
