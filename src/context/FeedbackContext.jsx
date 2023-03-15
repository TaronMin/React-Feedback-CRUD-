import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

const url = "http://localhost:5000/";

export const FeedbackProvider = ({ children }) => {
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    await fetch(`${url}feedback?_sort=id?_order=desc`)
      .then((response) => response.json())
      .then((data) => setFeedback(data));
  };

  const removeFeedback = async (id) => {
    if (window.confirm("Are you sure to delete item")) {
      await fetch(`${url}feedback/${id}`);
      setFeedback(() => feedback.filter((val) => val.id !== id));
    }
  };

  const addNewFeedback = async (newFeedback) => {
    await fetch(`${url}feedback`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    })
      .then((response) => response.json())
      .then((data) => setFeedback([data, ...feedback]));
  };

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const updateFeedback = async (id, updItem) => {
    await fetch(`${url}feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updItem),
    })
      .then((response) => response.json())
      .then(data => setFeedback(
        feedback.map((item) => {
          return item.id === id ? { ...item, ...data } : item;
        })
      ))
    
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        removeFeedback,
        addNewFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
