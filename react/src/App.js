import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import LandingPageContainer from './containers/LandingPageContainer';
import AboutPageContainer from './containers/AboutPageContainer';
import SongsIndexContainer from './containers/SongsIndexContainer';
import SongShowContainer from './containers/SongShowContainer';

const App = (props) => {
  return (
    <Router>
      <div>
        <Route exact path="/" render={()=><LandingPageContainer userId={props.userId}/>}/>
        <Route exact path="/about" component={AboutPageContainer}/>
        <Route exact path="/songs" component={SongsIndexContainer}/>
        <Route exact path="/songs/:id" component={SongShowContainer}/>
      </div>
    </Router>
  );
}

export default App;
