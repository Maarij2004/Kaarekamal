import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import logo from './LOGO_KK.png'; // Adjust the path if the image is in a subdirectory
import homeImage from './Home.svg'; // Import the Home.svg image
import medImage from './med.jpeg'; // Import images
import rationImage from './ration.jpeg';
import rozgarImage from './rozgar.jpeg';
import bdsImage from './bds.jpeg';
import schoolImage from './school.jpeg';

function Home() {
  return (
    <div className="home-container">
      <img src={homeImage} alt="Home" className="home-image" />
      <div className="home-text">
        <h1>DONATE FOR</h1>
        <h2>AFTERLIFE</h2>
      </div>
      <div className="home-facts">
        <div className="fact">
          <span className="fact-number">4K+</span>
          <span className="fact-text">Families Helped Monthly</span>
        </div>
        <div className="fact">
          <span className="fact-number">65+</span>
          <span className="fact-text">Cities we are in</span>
        </div>
        <div className="fact">
          <span className="fact-number">8K+</span>
          <span className="fact-text">Total Team Members</span>
        </div>
      </div>
      <div className="domain-section">
        <h2 className="domain-heading">Our Domains</h2>
        <div className="domain-grid">
          <div className="domain-item">
            <img src={medImage} alt="Medicine" className="domain-image" />
            <span className="domain-text">Medicine</span>
          </div>
          <div className="domain-item">
            <img src={rationImage} alt="Ration" className="domain-image" />
            <span className="domain-text">Ration</span>
          </div>
          <div className="domain-item">
            <img src={rozgarImage} alt="Rozgar" className="domain-image" />
            <span className="domain-text">Rozgar</span>
          </div>
          <div className="domain-item">
            <img src={bdsImage} alt="BDS" className="domain-image" />
            <span className="domain-text">BDS</span>
          </div>
          <div className="domain-item">
            <img src={schoolImage} alt="School Fee" className="domain-image" />
            <span className="domain-text">School Fee</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function MonthlyReports() {
  return <h2>Monthly Reports</h2>;
}

function Team() {
  return <h2>Meet Our Team</h2>;
}

function JoinOurTeam() {
  return <h2>Join Our Team</h2>;
}

function ContactUs() {
  return <h2>Contact Us</h2>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <div className="logo">
            <img src={logo} alt="Kaar e Kamal Logo" style={{ height: '50px' }} />
          </div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/monthly-reports">Monthly Reports</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/join-our-team">Join Our Team</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/monthly-reports" element={<MonthlyReports />} />
          <Route path="/team" element={<Team />} />
          <Route path="/join-our-team" element={<JoinOurTeam />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/" element={<Home />} />
        </Routes>

        <footer>
          <p>© 2023 Kaar e Kamal Welfare Foundation - Khanewal Chapter. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
