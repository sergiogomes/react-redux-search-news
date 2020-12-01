import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from '../core/components/header/Header';
import Counter from './counter/Counter';
import Search from './search/Search';
import Home from './home/Home';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Container>
          <Route path="/" exact component={Home} />
          <Route path="/counter" component={Counter} />
          <Route path="/search" component={Search} />
        </Container>
      </div>
    </Router>
  );
}

export default App;
