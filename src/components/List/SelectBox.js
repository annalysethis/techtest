import React, { Component } from "react";
import { SelectBoxContainer } from "./List.styled";
import ListData from "../data/saloons.json";

class SelectBox extends React.Component {
  state = {
    items: this.props.items || [],
    showItems: false,
    selectedItem: this.props.items && this.props.items[0],
  };
  dropDown = () => {
    this.setState((prevState) => ({
      showItems: !prevState.showItems,
    }));
  };

  selectItem = (item) =>
    this.setState({
      selectedItem: item,
      showItems: false,
    });

  render() {
    return (
      <div>
        <SelectBoxContainer>
          <div className="select-box--arrow" onClick={this.dropDown}>
            <span
              className={`${
                this.state.showItems
                  ? "select-box--arrow-up"
                  : "select-box--arrow-down"
              }`}
            />
          </div>
          <div style={{ display: this.state.showItems ? "block" : "none" }}>
            {this.state.items.map((item) => (
              <div
                key={item.id}
                onClick={() => this.selectItem(item)}
                className={this.state.selectedItem === item ? "selected" : ""}
              >
                {item.value}
              </div>
            ))}
          </div>
          <div className="selected-item">{this.state.selectedItem.value}</div>
        </SelectBoxContainer>
      </div>
    );
  }
}

export default SelectBox;
