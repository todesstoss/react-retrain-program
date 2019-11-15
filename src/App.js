import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Movie from './pages/Movie';
import logo from './logo.svg';
import './App.css';

const routes = [
  { path: '/', Page: Home },
  { path: '/movies', Page: Movies },
  {
    path: '/movies/:id',
    Page: Movie,
  },
];

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          {/* nav */}
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/movies">movies</Link>
              </li>
              <li>
                <Link to="/search">search</Link>
              </li>
              <li>
                <Link to="/contact">contact</Link>
              </li>
              <li>
                <Link to="/movies/1">movie 1</Link>
              </li>
            </ul>
          </nav>
          {/* nav */}
        </header>
        {/* routes */}
        {routes.map(({ path, Page }, index) => {
          return (
            <Route exact key={index} path={path}>
              <Page />
            </Route>
          );
        })}
        {/* routes */}
      </div>
    </Router>
  );
}

export default App;
