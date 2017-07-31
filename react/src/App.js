import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SongsIndexContainer from './containers/SongsIndexContainer';
import SongShowContainer from './containers/SongShowContainer';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path='/' component={SongsIndexContainer} />
          <Route exact path='/songs' component={SongsIndexContainer} />
          <Route exact path='/songs/:id' component={SongShowContainer} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
