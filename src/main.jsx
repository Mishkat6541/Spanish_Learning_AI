import { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginRegister from './Loginregister.jsx';
import Dashboard from './dashboard.jsx';
import Home from './homepage.jsx';
import PrivateRoute from './PrivateRoute.jsx'; // Import the PrivateRoute component

import './style.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check if the user is authenticated when the app starts
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginRegister setIsAuthenticated={setIsAuthenticated} />} />
        {/* Use PrivateRoute for dashboard */}
        <Route path="/dashboard" element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
