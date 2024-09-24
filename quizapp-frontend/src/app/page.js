"use client"; // Ensure client-side behavior

import { useState, useEffect } from 'react';
import styles from './page.module.css'; // Import your styles

export default function Questions() {
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Fetch all questions from the backend
    fetch('http://localhost:8080/api/question/allQuestions')
      .then(response => response.json())
      .then(data => setQuestions(data))
      .catch(error => console.error('Error fetching questions:', error));
  }, []);

  // Handle selecting an answer
  const handleAnswerChange = (questionId, answer) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: answer, // Store the selected answer for each question
    });
  };

  // Handle the form submission
  const handleSubmit = () => {
    setIsSubmitted(true); // Mark that the form has been submitted
  };

  // Check if the selected answer is correct
  const isAnswerCorrect = (questionId, correctAnswer) => {
    return selectedAnswers[questionId] === correctAnswer;
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Quiz Questions</h1>

      <ul className="space-y-6">
        {questions.map((question) => (
          <li key={question.id} className={styles.questionCard}>
            <h2 className={styles.questionTitle}>{question.questionTitle}</h2>

            {/* Display options as radio buttons */}
            <div className={styles.options}>
              {[question.option1, question.option2, question.option3].map((option, index) => (
                <div key={index}>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      value={option}
                      onChange={() => handleAnswerChange(question.id, option)}
                      disabled={isSubmitted} // Disable inputs after submitting
                    />
                    <span className="ml-2">{option}</span>
                  </label>
                </div>
              ))}
            </div>

            {/* If form is submitted, show feedback on the answer */}
            {isSubmitted && (
              <p
                className={`${styles.feedback} ${isAnswerCorrect(question.id, question.correctAnswer) ? styles.correct : styles.wrong}`}
              >
                {isAnswerCorrect(question.id, question.correctAnswer) ? 'Correct Answer!' : `Wrong Answer! Correct: ${question.correctAnswer}`}
              </p>
            )}

            {/* Display category and difficulty */}
            <p className={styles.categoryDifficulty}>
              Category: {question.category} | Difficulty: {question.difficultyLevel}
            </p>
          </li>
        ))}
      </ul>

      {/* Submit button */}
      {!isSubmitted && (
        <div className="text-center mt-8">
          <button
            onClick={handleSubmit}
            className={styles.submitButton}
          >
            Submit Answers
          </button>
        </div>
      )}
    </div>
  );
}
