import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import ImageSearch from './Components/ImageSearch';
import WebSearch from './Components/WebSearch';
import NewsSearch from './Components/NewsSearch';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/WebSearch">Home</Link>
            </li>
            <li>
              <Link to="/ImageSearch">Image</Link>
            </li>
            <li>
              <Link to="/NewsSearch">News</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/WebSearch" component={WebSearch} />
          <Route exact path="/ImageSearch" component={ImageSearch} />
          <Route exact path="/NewsSearch" component={NewsSearch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
