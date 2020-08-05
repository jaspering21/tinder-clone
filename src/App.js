import React from 'react';
import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import TinderCards from './TinderCards'
import SwipeButtons from './SwipeButtons'

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header/>
      <Router>
        <Switch>
          <Route path="chat">

          </Route>
          <Route path="/">
            <TinderCards/>
            <SwipeButtons/>
          </Route>
        </Switch>
      {/* {Tinder Card} */}
      {/* {Button below tinder cards} */}
      {/* {Chats screen} */}
      {/* {Indivdual chat screen} */}
      </Router>

    </div>
  );
}

export default App;
