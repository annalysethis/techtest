import styled from "styled-components";

export const MainContainer = styled.div`
  border-bottom: 1px solid #f4f4f4;
  width: 100%;
  padding: 10px;
  margin-top: 10px;
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

// ************** JSON DATA *****************

export const SaloonName = styled.h3`
  font-weight: 400;
  padding: 0;
  margin: 0;
`;

export const Clock = styled.p`
  margin-top: 3px;
  padding-top: 0;
  margin-right: 15px;
  font-family: sans-serif;
  font-weight: 100;
  font-size: 15px;
  display: flex;
`;

export const Price = styled.p`
  padding: 0;
  margin: 0;
  font-size: 16px;
  font-family: sans-serif;
  margin-right: 50px;
`;

export const Address = styled.p`
  padding: 0;
  margin: 0;
  color: #828282;
`;

export const Time = styled.p`
  padding: 0;
  margin-top: 0;
  margin-bottom: 5px;
  margin-right: 50px;
  color: #828282;
  font-size: 14px;
  font-family: sans-serif;
`;

// ****************** StarRatings.js *******************

export const StarContainer = styled.div`
  padding: 0;
  margin-bottom: 5px;
  display: flex;
  flex-direction: row;
`;

export const NumOfVotes = styled.p`
  padding: 0;
  margin: 0;
  margin-left: 10px;
  font-size: 13px;
  color: #828282;
  font-size: 12px;
  font-family: sans-serif;
`;
