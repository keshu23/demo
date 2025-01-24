// import React from 'react';
import { useState, } from "react";
import "../Preloader.css";
// import Preloader from "./Preloader";



export default function Home() {

  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedback.trim()) {
      alert(`Feedback submitted: ${feedback}`);
      setFeedback(""); // Clear input after submission
    } else {
      alert("Please enter your feedback before submitting.");
    }
  };

  return (
    <>
    <div id="content" className="text-center">
          <h1>Page Loaded!</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto expedita
            perspiciatis id explicabo ut excepturi repudiandae iure optio similique
            facilis recusandae ratione pariatur quod consectetur doloribus laboriosam
            esse obcaecati eius velit veniam reprehenderit quam, necessitatibus
            ducimus quidem. Neque deserunt quis ex cupiditate itaque, dolorem
            consectetur ratione, accusantium quibusdam modi ea at sint iste quod
            aspernatur?
          </p>

          <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Write your feedback here..."
          rows="4"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            fontSize: "16px",
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "#007BFF",
            color: "#fff",
            padding: "10px 20px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
        </div>
    </>
  );
}