import React from "react";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import Card from "./shared/Card";
import { FaTimes, FaEdit } from "react-icons/fa";

function FeedbackItem({ item }) {
  const {removeFeedback, editFeedback} = useContext(FeedbackContext)


  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close" onClick={() => removeFeedback(item.id)}>
        <FaTimes />
      </button>
      <button className="edit" onClick={() => editFeedback(item)}>
        <FaEdit />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
