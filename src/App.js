import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Greeting from './components/Greeting';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/greeting" element={<Greeting />} />
    </Routes>
  </BrowserRouter>
);

export default App;
