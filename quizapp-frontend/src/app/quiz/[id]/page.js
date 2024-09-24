"use client";

// src/app/quiz/[id]/page.js
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function QuizDetail({ params }) {
  const { id } = params; // Get the quiz ID from the URL params
  const [quiz, setQuiz] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:8080/api/quizzes/${id}`)
        .then(response => response.json())
        .then(data => setQuiz(data))
        .catch(error => console.error('Error fetching quiz:', error));
    }
  }, [id]);

  if (!quiz) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold">{quiz.name}</h1>
      <p className="text-lg text-gray-600">{quiz.description}</p>
      {/* Render quiz questions or other details here */}
    </div>
  );
}
