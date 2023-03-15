import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./Pages/AboutPage";
import Post from "./components/Post";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div className="container">
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
              </div>
            }
          />

          <Route path="/about" element={<AboutPage />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
