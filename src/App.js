import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
// import Movies from './pages/Movies';
import Movie from './pages/Movie';
import TDBconfigurationContextProvider from './context/TDBconfigurationContext';
import './App.css';

function App() {
  return (
    <TDBconfigurationContextProvider>
      <Router>
        <div className="App">
          <header>
            {/* nav */}
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
              </ul>
            </nav>
            {/* nav */}
          </header>
          {/* routes */}
          <Switch>
            <Route exact path="/movies/:id">
              <Movie />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route>Error</Route>
          </Switch>
          {/* routes */}
        </div>
      </Router>
    </TDBconfigurationContextProvider>
  );
}

export default App;
