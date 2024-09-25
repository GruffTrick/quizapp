import Navbar from './Navbar';
import styles from './globals.css';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold text-center mb-8">Welcome to the Quiz App</h1>
        <p className="text-center">Test your knowledge by taking our quiz!</p>
      </div>
    </>
  );
}
