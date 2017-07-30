import React from 'react';
// import NavBar from './components/NavBar'
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import SongsIndexContainer from './containers/SongsIndexContainer';

const App = (props) => {
  return (
    <div className="row">
      <div className="medium-4 large-6 columns">react/src/app.js</div>
      <div className="medium-4 large-3 columns">react/src/app.js</div>
      <div className="medium-4 large-3 columns">react/src/app.js</div>
      <SongsIndexContainer />
    </div>
    // // react-simple-blog
    // <Router history={browserHistory}>
    //   <Route path='/' component={NavBar} >
    //     <IndexRoute component={ArticlesIndexContainer} />
    //     <Route path="/articles" component={ArticlesIndexContainer}/>
    //     <Route path="/articles/:id" component={ArticleShowContainer}/>
    //   </Route>
    // </Router>
  );
}

export default App;
