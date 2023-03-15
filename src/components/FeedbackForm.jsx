import React, { useEffect, useState } from "react";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

function FeedbackForm() {
  const [rating, setRating] = useState(10);
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [msg, setMsg] = useState("");

  const { addNewFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
    }
  }, [feedbackEdit]);

  const handleChange = (e) => {
    if (!text) {
      setBtnDisabled(true);
      setMsg(null);
    } else if (text.trim().length <= 10) {
      setBtnDisabled(true);
      setMsg("Text must be at least 10 characters");
    } else {
      setBtnDisabled(false);
      setMsg(null);
    }

    setText(e.target.value);
  };

  const addFeedback = (e) => {
    e.preventDefault();
    const newFeedback = {
      text,
      rating,
    };

    if (feedbackEdit.edit) {
      updateFeedback(feedbackEdit.item.id, newFeedback);
    } else {
      addNewFeedback(newFeedback);
    }

    setText("");
  };

  return (
    <Card>
      <form onSubmit={addFeedback}>
        <h2>How would you rate your service with us.</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            value={text}
            onChange={handleChange}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {msg && <div className="message">{msg}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
