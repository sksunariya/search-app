import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchBars from './components/SearchBars';
import ResultsPage from './components/ResultsPage';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<SearchBars />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
