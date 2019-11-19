import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
// import Movies from './pages/Movies';
import Movie from './pages/Movie';
import TDBconfigurationContextProvider from './context/TDBconfigurationContext';

import 'normalize.css';
import 'purecss';
import './App.css';

function App() {
  return (
    <TDBconfigurationContextProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/movies/:id">
            <Movie />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route>Error</Route>
        </Switch>
      </Router>
    </TDBconfigurationContextProvider>
  );
}

export default App;
