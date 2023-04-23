import React from 'react';
import "./styles/myStyle.css";
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';
import About from './pages/About';
import Posts from './pages/Posts'

function App() {
  return (
    <BrowserRouter>
    <div className="navbar">
      <div slassName="navbar__links">
        <Link to="/about">About site</Link>
        <Link to="/posts">Posts</Link>
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
