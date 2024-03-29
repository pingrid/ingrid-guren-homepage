import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './routes/Home';
import { Header } from './components/header/Header';
import './index.css';
import { Profile } from './routes/Profile';
import { getRandomColor } from './getRadomColor';
import { Skryt } from './routes/Skryt';

const App = () => {
  const color = getRandomColor();
  return (
    <Router>
      <Header color={color} />
      <div className="main-content">
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/skryt" element={<Skryt color={color} />} />
          <Route path="*" element={<Home color={color} />} />
        </Routes>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
