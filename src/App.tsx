import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Laptops from './pages/Laptops';
import Phones from './pages/Phones';
import Desktops from './pages/Desktops';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/laptops" element={<Laptops />} />
          <Route path="/phones" element={<Phones />} />
          <Route path="/desktops" element={<Desktops />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
