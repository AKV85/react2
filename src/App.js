import React from 'react';
import "./styles/myStyle.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Posts from './pages/Posts'

function App() {
  return (
    <BrowserRouter>
    <div className="navbar">
      <div slassName="navbar__links">
        <a href="/about">About site</a>
        <a href="/posts">Posts</a>
      </div>
    </div>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
