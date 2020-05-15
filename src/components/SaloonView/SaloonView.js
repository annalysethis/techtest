import React from "react";
import ListData from "../data/saloons.json";
import {
  Container,
  SaloonImg,
  SaloonName,
  ImgContainer,
  Stars,
  SaloonInfo,
  Container2,
  InfoBox,
  SchemaBox,
} from "./Saloon.styled";
import StarRatings from "../List/StarRatings";
import Settings from "../MobileSettings/Settings";
import { FloatingNav } from "../Navigation/Nav";

const SaloonView = (props) => {
  return (
    <Container>
      <ImgContainer>
        <Settings />

        <FloatingNav selectSaloon={props.selectSaloon} />
        <SaloonImg
          src={ListData.find((item) => item.id == props.id).image}
        ></SaloonImg>
        {/* <Header selectSaloon={props.selectSaloon} /> */}

        <SaloonName>
          {ListData.find((item) => item.id == props.id).name}
        </SaloonName>
        <Stars>
          <StarRatings />
        </Stars>
      </ImgContainer>

      <SaloonInfo>
        <Container2>
          <InfoBox>Info</InfoBox>
          <SchemaBox>Schema</SchemaBox>
        </Container2>
        <p>{ListData.find((item) => item.id == props.id).address}</p>
        <p>{ListData.find((item) => item.id == props.id).zipcode}</p>
        <p>
          Öppet till {ListData.find((item) => item.id == props.id).closing_time}{" "}
          idag
        </p>
        <p>{ListData.find((item) => item.id == props.id).number}</p>
        <p>{ListData.find((item) => item.id == props.id).website}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          voluptate laboriosam corrupti consectetur, explicabo aperiam soluta
          obcaecati odit optio sapiente, deleniti eaque tenetur quaerat ducimus
          perspiciatis aspernatur officia, molestias amet!
        </p>
      </SaloonInfo>
    </Container>
  );
};
export default SaloonView;
