import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './routes/Home';
import { Header } from './components/header/Header';
import './index.css';
import { Profile } from './routes/Profile';
import { getRandomColor } from './getRadomColor';

const App = () => {
  const color = getRandomColor();
  return (
    <Router>
      <Header color={color} />
      <div className="main-content">
        <Switch>
          <Route exact path="/">
            <Home color={color} />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
