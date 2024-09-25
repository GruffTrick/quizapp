"use client"; // Ensure client-side behavior

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateQuiz() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [numQuestions, setNumQuestions] = useState(1);
  const [error, setError] = useState(null);

  const router = useRouter(); // To navigate to other pages

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!title || !category || numQuestions < 1) {
      setError("Please fill all fields with valid information.");
      return;
    }

    // Submit the form data to the backend (replace the URL with your API endpoint)
    try {
      const response = await fetch("http://192.168.0.11:8080/api/quiz/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category: category,
          numberOfQuestions: numQuestions,
          title: title,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create quiz");
      }

      // Reset form after successful submission
      setTitle("");
      setCategory("");
      setNumQuestions(1);

      // Redirect to another page after quiz creation (e.g., to a list of quizzes)
      router.push("/quizzes");
    } catch (error) {
      setError("Failed to create quiz. Please try again later.");
    }
  };

  return (
    <div className="createQuizContainer">
      <h1 className="title">Create a New Quiz</h1>

      {error && <p className="errorMessage">{error}</p>}

      <form onSubmit={handleSubmit} className="quizForm">
        {/* Title Input */}
        <div className="formGroup">
          <label htmlFor="title" className="formLabel">Quiz Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="formInput"
            placeholder="Enter quiz title"
          />
        </div>

        {/* Category Input */}
        <div className="formGroup">
          <label htmlFor="category" className="formLabel">Category:</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="formInput"
            placeholder="Enter category"
          />
        </div>

        {/* Number of Questions Input */}
        <div className="formGroup">
          <label htmlFor="numQuestions" className="formLabel">Number of Questions:</label>
          <input
            type="number"
            id="numQuestions"
            value={numQuestions}
            onChange={(e) => setNumQuestions(Number(e.target.value))}
            className="formInput"
            min="1"
            placeholder="Enter number of questions"
          />
        </div>

        {/* Submit Button */}
        <div className="formGroup">
          <button type="submit" className="submitButton">
            Create Quiz
          </button>
        </div>
      </form>
    </div>
  );
}
