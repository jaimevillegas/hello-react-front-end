import React from 'react';
import Greeting from './components/Greeting';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/greeting" element={<Greeting />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
