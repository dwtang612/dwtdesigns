import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'; // Adjusted import for Home component
import Portfolio from './Portfolio'; // Adjusted import for Portfolio component
import Contact from './Contact'; // Adjusted import for Contact component

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
