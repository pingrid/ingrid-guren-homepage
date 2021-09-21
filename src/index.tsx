import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './routes/Home';
import * as serviceWorker from './serviceWorker';
import { Header } from './components/header/Header';
import './index.scss';
import { Profile } from './routes/Profile';

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

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
serviceWorker.unregister();
