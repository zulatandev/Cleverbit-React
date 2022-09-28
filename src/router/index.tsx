// Dependencies
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import { Home } from '../pages/Home';

// Create app router
const AppRouter = () => {
  // Return app router
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

// Export app routes
export default AppRouter;
