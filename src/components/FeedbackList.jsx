import React from "react";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import FeedbackItem from "./FeedbackItem";

function FeedbackList() {
  const {feedback} = useContext(FeedbackContext)

  if (!feedback || !feedback.length) {
    return <p>No Feedback yet</p>;
  }

  return (
    <div className="container">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default FeedbackList;
