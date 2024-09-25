// src/app/Navbar.js
import Link from 'next/link';
import styles from './globals.css';

export default function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex space-x-4 justify-center">
        <li>
          <Link href="/" className="text-white hover:text-gray-300">Home</Link>
        </li>
        <li>
          <Link href="/add-question" className="text-white hover:text-gray-300">Add Question</Link>
        </li>
        <li>
          <Link href="/quiz" className="text-white hover:text-gray-300">Take Quiz</Link>
        </li>
        <li>
          <Link href="/all-questions" className="text-white hover:text-gray-300">All Questions</Link>
        </li>
      </ul>
    </nav>
  );
}
