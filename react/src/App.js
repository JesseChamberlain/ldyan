import React from 'react';
// import NavBar from './components/NavBar'
import { Route, IndexRoute, Router, browserHistory } from 'react-router';

const App = (props) => {
  return (
    <div class="row">
      <p>react/src/app.js</p>
      <div class="small-6 columns">left</div>
      <div class="small-6 columns">right</div>
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
