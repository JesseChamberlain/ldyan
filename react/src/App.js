import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import LandingPageContainer from './containers/LandingPageContainer';
import SongsIndexContainer from './containers/SongsIndexContainer';
import SongShowContainer from './containers/SongShowContainer';

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={LandingPageContainer}/>
        <Route exact path="/songs" component={SongsIndexContainer}/>
        <Route exact path="/songs/:id" component={SongShowContainer}/>
      </div>
    </Router>
  );
}

export default App;
