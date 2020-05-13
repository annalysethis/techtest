import styled from "styled-components";
import { Link } from "react-router-dom";

export const FilterContainer = styled.div`
  border-bottom: 1px solid #d3b23b;
  border-top: 1px solid #d3b23b;
  margin-top: 10px;
  width: 100%;
  height: 50%;
`;

export const Container = styled.div`
  border-bottom: 1px solid #eee;
  width: 100%;
  padding: 10px;
`;

export const Container4 = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Container2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const Container3 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const PriceBox = styled.div`
  display: flex;
  align-self: flex-end;
`;

export const Clock = styled.p`
  margin-top: 0;
  padding-top: 0;
  margin-right: 15px;
`;

export const NumOfVotes = styled.p`
  padding: 0;
  margin: 0;
  margin-left: 10px;
  font-size: 13px;
  color: #828282;
`;

export const Stars = styled.div`
  padding: 0;
  margin-bottom: 5px;
  display: flex;
  flex-direction: row;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  cursor: pointer;
`;

// ************** JSON FILES *****************

export const Headline = styled.h3`
  font-weight: 400;
  padding: 0;
  margin: 0;
`;

export const Price = styled.p`
  padding: 0;
  margin: 0;
`;

export const Address = styled.p`
  padding: 0;
  margin: 0;
  color: #828282;
`;

export const Time = styled.p`
  padding: 0;
  margin-top: 5px;
  margin-bottom: 5px;
  color: #828282;
`;
