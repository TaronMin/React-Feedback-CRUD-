import React, { useContext, useEffect } from "react";
import { useState } from "react";
import FeedbackContext from "../context/FeedbackContext";

function RatingSelect({ select }) {
  const [selected, setSelected] = useState(10);
  const ratingArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const { feedbackEdit } = useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit) {
      setSelected(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleChange = (e) => {
    const selectedRating = +e.currentTarget.value;
    setSelected(selectedRating);
    select(selectedRating);
  };

  return (
    <ul className="rating">
      {ratingArr.map((val, idx) => {
        return (
          <li key={idx * Math.random()}>
            <input
              type="radio"
              id={`num${val}`}
              name="rating"
              value={val.toString()}
              onChange={handleChange}
              checked={selected === val}
            />

            <label htmlFor={`num${val}`}>{val}</label>
          </li>
        );
      })}
    </ul>
  );
}

export default RatingSelect;
