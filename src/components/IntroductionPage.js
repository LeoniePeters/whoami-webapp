import React, { Component } from 'react';
import './IntroductionPage.css';
import star0 from '../images/star0.png'
import HomePage from './HomePage'

class IntroductionPage extends Component {
  state = {
    display: 'introduction'
  }

  handleOnClick = () => {
    this.setState({ display: 'home' })
  }

  render() {
    return (
      <div>
        {this.state.display === 'introduction' &&
          <div>
            <img onClick={this.handleOnClick}
              src={star0} alt='star0' id="star0" />
            <div className='intro'>
              <p>I have always had a thing for patterns. You can recognize that
                in the clothing I wear,the drawings I make (this background is
                an example), the art that I love...</p>
              <p>When I started getting interested in code I discovered that
                coding is actually all about that too, patterns.</p>
              <p>Coding is recognizing how different folders, files and data are
                linked and passed along. It's like a puzzle,the pieces have to
                fit. But the pieces are not always clearly provided. That is
                both the frustrating and the fun part of coding. Irregularities
                in the code's pattern cause bugs. But when you recognize the
                pattern, are in a coding flow, find the key that fits, and make
                something actually work, that is all joy!</p>
            </div>
          </div>
        }
        {this.state.display === 'home' &&
          <HomePage />}
      </div>
    );
  }
}

export default IntroductionPage;