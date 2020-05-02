import React from 'react';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import Routes from './routes';
const browserHistory = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Router history={browserHistory}>
          <Routes />
      </Router>
    </div>
  );
}

export default App;
