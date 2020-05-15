import React, { useState } from "react";
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

//Jag tänkte att stjärnorna inte behövde vara responsiva så gjorde som ovan istället.
//Denna kod är mer för en web-baserad version med hover:

// const StarRatings = () => {
//   const [rating, setRating] = useState(null);
//   const [hover, setHover] = useState(null);
//   return (
//     <div>
//       {[...Array(5)].map((star, i) => {
//         const ratingValue = i + 1;

//         return (
//           <label key={i}>
//             <input
//               type="radio"
//               name="rating"
//               value={ratingValue}
//               onClick={() => setRating(ratingValue)}
//             />
//             <FaStar
//               className="star"
//               color={ratingValue <= (hover || rating) ? "#D3B23B" : "#e4e5e9"}
//               size={14}
//               onMouseEnter={() => setHover(ratingValue)}
//               onMouseLeave={() => setHover(null)}
//             />
//           </label>
//         );
//       })}
//     </div>
//   );
// };

export default StarRatings;
