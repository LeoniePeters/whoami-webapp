import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PortfolioPage.css';
import star0 from '../images/star0.png'
import HomePage from './HomePage'

export default class PortfolioPage extends Component {
  state = {
    display: 'portfolio'
  }

  handleOnClick = () => {
    this.setState({ display: 'home' })
  }

  render() {
    return (
      <div>
        {this.state.display === 'portfolio' &&
          <div>
            <div className='portfolio'>
              <h1>My projects</h1>
              <p>Here you can find some apps I coded!</p>
              <article>
                <h2>Ohmmmm</h2>
                <p>Final group project for Codaisseur Code Academy: A meditation game for kids.</p>
                <p>Front-end: JavaScript, CSS, HTML, React, Redux<br></br>
                  Game: Phaser 3<br></br>
                  Back-end: NodeJS, Express</p>

                <a href='https://github.com/LeoniePeters/ohmmmm'
                  target="_blank"
                  rel='noopener noreferrer'>
                  GitHub repository</a>
              </article>
              <article>
                <h2>Drawbsurd</h2>
                <p>Group project for Codaisseur Code Academy: Multiplayer Pictionary game.</p>
                <p>Front-end: JavaScript, CSS, HTML, React, Redux<br></br>
                  Back-end: TypeScript, Koa, TypeORM, Socket.IO</p>

                <a href='https://github.com/LeoniePeters/Drawbsurd-game-client'
                  target="_blank"
                  rel='noopener noreferrer'>
                  GitHub repository</a>
              </article>

            </div>
            <img onClick={this.handleOnClick}
              src={star0} alt='star0' id="star0" />
          </div>
        }
        {this.state.display === 'home' &&
          <HomePage />}
      </div>
    );
  }
}