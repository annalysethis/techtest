import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Container2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 70px;
  margin: 0;
  align-items: center;
  border-bottom: 20px solid #f9f9f9;
`;

export const Text = styled.p`
  padding: 20px;
  color: #828282;
  font-family: sans-serif;
  font-weight: 100;
  font-size: 15px;
  line-height: 1.6;
`;

export const SaloonImg = styled.img`
  width: 100%;
`;

export const SaloonName = styled.h2`
  position: absolute;
  bottom: 20px;
  left: 16px;
  font-size: 25px;
`;

export const ImgContainer = styled.div`
  width: 100%;
  position: relative;
  text-align: center;
`;

export const Stars = styled.div`
  position: absolute;
  bottom: 15px;
  left: 16px;
`;

export const SaloonInfo = styled.section`
  height: 70%;
`;

export const InfoBox = styled.div`
  position: absolute;
  width: 50%;
  text-align: center;
  border-bottom: 2px solid #d3b23b;
  cursor: pointer;
  font-family: sans-serif;
  font-weight: 100;
  font-size: 15px;
`;

export const SchemaBox = styled.div`
  position: absolute;
  text-align: center;
  width: 50%;
  left: 50%;
  border-bottom: 2px solid #f4f4f4;
  cursor: pointer;
  font-family: sans-serif;
  font-weight: 100;
  font-size: 15px;
`;

export const UlList = styled.ul`
  list-style: none;
  width: 100%;
  padding: 0;
  margin: 0;

  li {
    padding: 20px;
    width: 100%;
    height: 50px;
    color: #828282;
    font-family: sans-serif;
    font-weight: 100;
    font-size: 15px;
    border-bottom: 1px solid #f4f4f4;
  }
`;
