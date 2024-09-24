// src/app/layout.js
import './globals.css'; // Global styles (with Tailwind, if you're using it)

export const metadata = {
  title: 'Quiz App',
  description: 'A quiz app built with Next.js and Spring Boot',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
