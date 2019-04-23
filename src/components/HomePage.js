import React, { Component } from 'react';
import star1 from '../images/star-r2b3.png'
import star3 from '../images/star-l1b1.png'
import star4 from '../images/star-l1b3.png'
import IntroductionPage from './IntroductionPage'
import PatternAlgorithmContainer from './PatternAlgorithmContainer'
import PortfolioPage from './PortfolioPage'
import './HomePage.css';

class HomePage extends Component {
  state = {
    display: 'portfolio'
  }

  handleOnClick = (display) => {
    this.setState({ display: display })
  }

  render() {
    return (
      <div>
        {this.state.display === 'home' &&
          <div>
            <img onClick={() => this.handleOnClick('patternAlgorithm')}
              src={star3} alt='star3' id="star3" />
            <img onClick={() => this.handleOnClick('introduction')}
              src={star4} alt='star4' id="star4" />
            <img onClick={() => this.handleOnClick('portfolio')}
              src={star1} alt='star1' id="star1" />
          </div>
        }

        {this.state.display === 'introduction' &&
          <IntroductionPage />}

        {this.state.display === 'patternAlgorithm' &&
          <PatternAlgorithmContainer />}

        {this.state.display === 'portfolio' &&
          <PortfolioPage />}
      </div>
    );
  }
}

export default HomePage;