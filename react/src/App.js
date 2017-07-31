import React from 'react';
import { BrowserRouter as Router, IndexRoute, Route, browserHistory, Switch, Link } from 'react-router-dom';
import SongsIndexContainer from './containers/SongsIndexContainer';
import SongShowContainer from './containers/SongShowContainer';

const App = (props) => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={SongsIndexContainer} />
          <Route exact path='/songs' component={SongsIndexContainer} />
          <Route exact path='/songs/:id' component={SongShowContainer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
