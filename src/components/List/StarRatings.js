import React from "react";
import { FaStar } from "react-icons/fa";
import { NumOfVotes, StarContainer } from "./List.styled";

const StarRatings = () => {
  return (
    <StarContainer>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <FaStar
              size={14}
              color={ratingValue <= 4 ? "#D3B23B" : "#e4e5e9"}
            />
          </label>
        );
      })}
      <NumOfVotes>(32)</NumOfVotes>
    </StarContainer>
  );
};

export default StarRatings;
