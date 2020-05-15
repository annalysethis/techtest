import styled from "styled-components";

export const Container = styled.nav`
  position: absolute;
  margin: 0;
  width: 60px;
  height: 5px;
  transform: rotate(90deg);
  top: 60px;
`;
export const FixedContainer = styled.nav`
  position: fixed;
  top: 60px;
  left: 0px;
  width: 60px;
  height: 5px;
  transform: rotate(90deg);
`;
export const Arrow = styled.span`
  top: 0;
  font-size: 16px;
  color: #d3b23b;
  transform: rotate(110deg);
  font-family: Geneva, Tahoma, Verdana, sans-serif;
`;

export const Arrow2 = styled.span`
  top: 0;
  margin-left: 1px;
  font-size: 16px;
  color: #d3b23b;
  transform: rotate(70deg);
  font-family: Geneva, Tahoma, Verdana, sans-serif;
`;

export const Arrow3 = styled.span`
  top: 0;
  font-size: 16px;
  color: #ffff;
  transform: rotate(110deg);
  font-family: Geneva, Tahoma, Verdana, sans-serif;
`;

export const Arrow4 = styled.span`
  top: 0;
  margin-left: 1px;
  font-size: 16px;
  color: #ffff;
  transform: rotate(70deg);
  font-family: Geneva, Tahoma, Verdana, sans-serif;
`;

export const BackBtn = styled.button`
  background: none;
  cursor: pointer;
  display: flex;
  margin: 0;
  padding: 0;
  height: 30px;
  width: 30px;
  border: none;
  outline: none;
`;
