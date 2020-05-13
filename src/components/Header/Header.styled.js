import styled from "styled-components";

export const Container1 = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container2 = styled.div`
  display: flex;
  margin-top: 0;
  margin-left: 5px;
  margin-bottom: 10px;
  height: 45px;
  width: 50px;
  transform: rotate(90deg);
  float: left;
`;

export const Container3 = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container4 = styled.div`
  margin: 0;
`;

export const Container5 = styled.div`
  margin: 0;
`;

export const Battery = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;
  height: 35px;
`;

export const Procent = styled.p`
  margin-top: 3px;
  margin-right: 5px;
  font-size: 11px;
  font-family: Geneva, Tahoma, Verdana, sans-serif;
`;

export const EqualizerImg = styled.img`
  margin-top: 5px;
  width: 25px;
  float: right;
  margin-right: 12px;
`;

export const HeaderMenu = styled.header`
  width: 100%;
  height: 65px;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 767px) {
  }

  @media (max-width: 360px) {
  }

  @media (max-width: 411px) {
    margin-top: 0;
  }
`;

export const Time = styled.p`
  margin: 0;
  font-size: 11px;
  font-family: Geneva, Tahoma, Verdana, sans-serif;
  margin-top: 6px;
`;

export const Headline = styled.h2`
  font-weight: 100;
  display: flex;
  align-self: center;
  margin-right: 30px;
  margin: 0;
  margin-top: 15px;
`;

export const WifiContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;
  height: 30px;
`;

export const Sketch = styled.p`
  margin-top: 1px;
  margin-left: 5px;
  margin-right: 5px;
  font-size: 12px;
  font-family: Geneva, Tahoma, Verdana, sans-serif;
`;
export const Arrow = styled.span`
  margin-top: 0;
  margin-left: 1px;

  font-size: 16px;
  color: #d3b23b;
  transform: rotate(110deg);
  font-family: Geneva, Tahoma, Verdana, sans-serif;
`;

export const Arrow2 = styled.span`
  margin-top: 0;
  margin-left: 1px;
  font-size: 16px;
  color: #d3b23b;
  transform: rotate(70deg);
  font-family: Geneva, Tahoma, Verdana, sans-serif;
`;

export const BackBtn = styled.button`
  cursor: pointer;
  display: flex;
  margin-top: 0;
  height: 45px;
  width: 30px;
  border: none;
  outline: none;
`;
