import React, { Component } from 'react';

class AboutPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {

    return(
      <div className="row">
        <div className="small-11 small-centered medium-9 medium-centered columns">
          <br/><br/><br/><br/><br/><br/><br/>
          <div className="ldyan-title">
            <span id="ldyan-name" className="ldyan-green">AB</span>
            <span id="ldyan-name" className="ldyan-red">O</span>
            <span id="ldyan-name" className="ldyan-pink">UT</span>
          </div>
          <br/><br/><br/>
        </div>
      </div>
    )
  }
}

export default AboutPageContainer;
