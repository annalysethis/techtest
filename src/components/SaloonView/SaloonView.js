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
  Text,
  InfoBox,
  SchemaBox,
  UlList,
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
          src={ListData.find((item) => item.id === props.id).image}
        ></SaloonImg>

        <SaloonName>
          {ListData.find((item) => item.id === props.id).name}
        </SaloonName>

        <i className="far fa-heart"></i>

        <Stars>
          <StarRatings />
        </Stars>
      </ImgContainer>

      <SaloonInfo>
        <Container2>
          <InfoBox>
            <p>Info</p>
          </InfoBox>
          <SchemaBox>
            <p>Schema</p>
          </SchemaBox>
        </Container2>

        <UlList>
          <li>
            <i className="fas fa-map-marker-alt"></i>
            {ListData.find((item) => item.id === props.id).address}, {""}
            {ListData.find((item) => item.id === props.id).zipcode}
          </li>
          <li>
            <i className="far fa-clock"></i>
            Öppet till {""}
            {ListData.find((item) => item.id === props.id).closing_time} idag
            <i className="fas fa-chevron-down"></i>
          </li>
          <li>
            <i className="fas fa-phone-alt"></i>
            {ListData.find((item) => item.id === props.id).number}
          </li>
          <li>
            <i className="fas fa-globe"></i>
            {ListData.find((item) => item.id === props.id).website}
          </li>
        </UlList>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          voluptate laboriosam corrupti consectetur, explicabo aperiam soluta
          obcaecati odit optio sapiente, deleniti eaque tenetur quaerat ducimus
          perspiciatis aspernatur officia, molestias amet!
        </Text>
      </SaloonInfo>
    </Container>
  );
};
export default SaloonView;
