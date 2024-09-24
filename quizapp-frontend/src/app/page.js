"use client"; // Use client-side behavior

import { useState, useEffect } from 'react';

export default function Questions() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Fetch all questions from the backend
    fetch('http://localhost:8080/question/allQuestions')
      .then(response => response.json())
      .then(data => setQuestions(data))
      .catch(error => console.error('Error fetching questions:', error));
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Quiz Questions</h1>
      <ul className="space-y-6">
        {questions.map((question) => (
          <li key={question.id} className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">{question.questionTitle}</h2>
            <div className="space-y-2">
              <div>
                <label className="inline-flex items-center">
                  <input type="radio" name={`question-${question.id}`} value={question.option1} />
                  <span className="ml-2">{question.option1}</span>
                </label>
              </div>
              <div>
                <label className="inline-flex items-center">
                  <input type="radio" name={`question-${question.id}`} value={question.option2} />
                  <span className="ml-2">{question.option2}</span>
                </label>
              </div>
              <div>
                <label className="inline-flex items-center">
                  <input type="radio" name={`question-${question.id}`} value={question.option3} />
                  <span className="ml-2">{question.option3}</span>
                </label>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-600">Category: {question.category} | Difficulty: {question.difficultyLevel}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
