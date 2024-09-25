"use client"; // Ensure client-side rendering

import { useState } from 'react';
import Navbar from '../Navbar';

export default function AddQuestion() {
  const [questionTitle, setQuestionTitle] = useState('');
  const [category, setCategory] = useState('');
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [option3, setOption3] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [difficultyLevel, setDifficultyLevel] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Create a new question object
    const newQuestion = {
      questionTitle,
      category,
      option1,
      option2,
      option3,
      correctAnswer,
      difficultyLevel
    };

    try {
      // Send the question to the backend using a POST request
      const response = await fetch('http://192.168.0.11:8080/api/question/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newQuestion),
      });

      if (response.ok) {
        setMessage('Question added successfully!');
        // Clear the form
        setQuestionTitle('');
        setCategory('');
        setOption1('');
        setOption2('');
        setOption3('');
        setCorrectAnswer('');
        setDifficultyLevel('');
      } else {
        setMessage('Failed to add question.');
      }
    } catch (error) {
      console.error('Error adding question:', error);
      setMessage('An error occurred while adding the question.');
    }
  };

  return (
    <div className="container mx-auto py-10">

    <Navbar />
      <h1 className="text-3xl font-bold text-center mb-8">Add a New Question</h1>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Question Title</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg p-2"
            value={questionTitle}
            onChange={(e) => setQuestionTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Category</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg p-2"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Option 1</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg p-2"
            value={option1}
            onChange={(e) => setOption1(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Option 2</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg p-2"
            value={option2}
            onChange={(e) => setOption2(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Option 3</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg p-2"
            value={option3}
            onChange={(e) => setOption3(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Correct Answer</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg p-2"
            value={correctAnswer}
            onChange={(e) => setCorrectAnswer(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Difficulty Level</label>
          <select
            className="w-full border border-gray-300 rounded-lg p-2"
            value={difficultyLevel}
            onChange={(e) => setDifficultyLevel(e.target.value)}
            required
          >
            <option value="">Select Difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="text-center mt-6">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
          >
            Submit Question
          </button>
        </div>

        {/* Message after submission */}
        {message && <p className="mt-4 text-center text-green-600">{message}</p>}
      </form>
    </div>
  );
}
