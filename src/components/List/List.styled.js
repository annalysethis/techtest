import styled from "styled-components";

export const SelectBoxContainer = styled.div`
  height: 30px;
`;

export const StyledSelect = styled.select`
  border: none;
  outline: none;
  background: none;
  content: "";
`;

export const StarContainer = styled.div`
  padding: 0;
  margin-bottom: 5px;
  display: flex;
  flex-direction: row;
`;

export const FilterContainer = styled.div`
  position: relative;
  border-bottom: 1px solid #d3b23b;
  border-top: 1px solid #d3b23b;
  margin-top: 10px;
  width: 100%;
  height: 50px;
`;

export const SelectBtn = styled.button`
  position: absolute;
  border: none;
  transform: rotate(180deg);
  font-size: 20px;
  right: 10px;
  cursor: pointer;
  background: none;
  font-family: Geneva, Tahoma, Verdana, sans-serif;
`;

export const MainContainer = styled.div`
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
  font-size: 12px;
  font-family: sans-serif;
`;

// ************** JSON FILES *****************

export const SaloonName = styled.h3`
  font-weight: 400;
  padding: 0;
  margin: 0;
`;

export const Price = styled.p`
  padding: 0;
  margin: 0;
  font-size: 16px;
  font-family: sans-serif;
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
  color: #828282;
  font-size: 14px;
  font-family: sans-serif;
`;
