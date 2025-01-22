import React from 'react';
import { Link } from 'react-router-dom';
import './homepage.css'; // Ensure this points to the correct CSS file

function Home() {
  return (
    <div className="App">
      {/* Header Section */}
      <header>
        <div className="logo">
          <h1>Spanish Learn</h1>
        </div>
        <div className="auth">
          <Link to="/login" className="login-btn">Login / Sign In</Link>
        </div>
      </header>

      {/* Main Content Section */}
      <main>
        <section className="hero">
          <h2>Master Spanish, Open New Opportunities</h2>
          <p>Start learning today with easy-to-follow lessons, quizzes, and more!</p>
        </section>

        <section className="features">
          <h3>Why Learn Spanish?</h3>
          <ul>
            <li>Enhance your career prospects</li>
            <li>Travel with confidence</li>
            <li>Expand your cultural knowledge</li>
            <li>Make new connections worldwide</li>
          </ul>
        </section>

        <section className="cta">
          <h3>Join Us Today and Start Your Language Journey!</h3>
          <p>Learning Spanish has never been more accessible. Let's begin your path to fluency!</p>
          <Link to="/signup" className="signup-btn">Get Started</Link>
        </section>
      </main>

      {/* Footer Section */}
      <footer>
        <p>© 2025 Spanish Learn | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default Home;
