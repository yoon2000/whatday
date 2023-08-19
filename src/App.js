import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Page1 from './Main';
import Page2 from './Map';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route index path="/" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
