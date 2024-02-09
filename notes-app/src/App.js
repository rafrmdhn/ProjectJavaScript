import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Home from './pages/Home';
import Archive from './pages/Archive';
import Detail from './pages/Detail';
import AddNote from './pages/AddNote';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/archived" element={<Archive />} />
          <Route path="/notes/:id" element={<Detail />} />
          <Route path="/new" element={<AddNote/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
