import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Trending from './components/Trending';
import SearchBar from './components/SearchBar';
import Giph from './components/Giph';
import GlobalStyles from './components/GlobalStyles';
import styled from 'styled-components';

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Container>
          <Navbar />
          <SearchBar />
          <Switch>
            <Route exact path='/'>
              <Trending />
            </Route>
            <Route exact path='/search/:value'>
              <Giph />
            </Route>
          </Switch>
        </Container>
      </Router>
      <GlobalStyles />
    </React.Fragment>
  );
};

const Container = styled.div`
  width: 68%;
  margin: 0 auto;
`;

export default App;
