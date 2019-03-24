import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

class WelcomePage extends Component {
    render() {
        return (
            <div className='intro'>
                <h1>Leonie Peters: full-stack developer</h1>
                <p>Great to see you here! This webapp is my profesional online presentation and my coding playground.
                  If you want to know more about me click on the blinking stars and enter my universe!
                  </p>
                  <p>Hint1: the blinking stars are your guide. They link to different pages.
                  Also to go back, find the blinking star.</p>
                  <p>Hint2: the topleft blinking star contains a pattern generating algorithm!</p>
                  <p>When you're ready,</p>
                <Link to='/home'>Click here!</Link>
            </div>
        );
    }
}

export default WelcomePage;