import React, { Component } from 'react';
import star1 from '../images/star-r2b3.png'
import IntroductionPage from './IntroductionPage'
import './HomePage.css';

class HomePage extends Component {
  state = {
      display: 'home'
    }

  handleOnClick = () => {
    this.setState({display: 'introduction'})
  }

  render() {
    return (
      <div>
        {this.state.display === 'home' &&
          <img onClick={this.handleOnClick} src={star1} alt='star1' id="star1" />
        }

        {this.state.display === 'introduction' &&
        <IntroductionPage />}
      </div>
    );
  }
}

export default HomePage;