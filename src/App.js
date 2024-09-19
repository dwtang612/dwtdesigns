import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Portfolio from './Portfolio';
import Contact from './Contact';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  //------------------------------------------------------------------------------HTML SECTION------------------------------------------------------------------------------
  return (
    <Router>
      <div className="content-wrapper">
        {/* Navigation Bar */}
        <nav className="navbar">
          <div className="menu-icon" onClick={toggleMenu}>
            ☰ {/* Hamburger icon */}
          </div>
          <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/portfolio" onClick={toggleMenu}>Portfolio</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
          </ul>
        </nav>

        {/* Route Components */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-content">
            <p>&copy; 2024 Your Website. All rights reserved.</p>
            <p><a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
