import React from "react";
import ListData from "../data/saloons.json";

const SaloonView = (props) => {
  return (
    <div>
      {/* <Header selectSaloon={props.selectSaloon} /> */}

      <h1>SaloonView {ListData.find((item) => item.id == props.id).name}</h1>
    </div>
  );
};
export default SaloonView;
