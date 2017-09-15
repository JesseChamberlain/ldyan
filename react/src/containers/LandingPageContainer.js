import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LandingPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    let landingLink

    // Toggle between About and Songs pages depending on sign in status
    if (this.props.userId == "") {
      landingLink = <Link to={`/about`}>
        <h1 className="text-link">Learn More</h1>
      </Link>
    } else {
      landingLink = <Link to={`/songs`}>
        <h1 className="text-link">Songs</h1>
      </Link>
    }

    return(
        <div className="row">
          <div className="small-11 small-centered medium-9 medium-centered columns">
            <br/><br/><br/><br/><br/><br/><br/>
            <div className="ldyan-title">
              <span id="ldyan-name" className="ldyan-green">LD</span>
              <span id="ldyan-name" className="ldyan-red">Y</span>
              <span id="ldyan-name" className="ldyan-pink">AN</span>
            </div>
            <br/><br/><br/>
            <div className="song-tile">
              {landingLink}
            </div>
          </div>
        </div>
    )
  }
}

export default LandingPageContainer;
