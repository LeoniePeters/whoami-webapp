import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './WelcomePage.css';
import portrait from '../images/Leonie-portrait.png'
import star1 from '../images/star-r2b3-blank.png'
import github from '../images/github.png'
import linkedIn from '../images/linkedin.png'
import mail from '../images/gmail.png'
import instagram from '../images/instagram.png'

class WelcomePage extends Component {
    render() {
        return (
            <div className='welcome'>
                <h1>Leonie Peters: full-stack developer</h1>
                <img src={portrait} id='portrait' alt='portrait'></img>
                <p>Great to see you here!</p>
                <p>I am an art historian turned programmer who has fallen for the great possibilities coding has to offer. 
                    In code I can combine my talents in abstraction, logic and creativity to make beautiful products that work well. </p>
                <p>This webapp is my professional online presentation and my coding playground.</p>
                <p>If you want to know more about me click on the blinking stars and enter my universe!</p>
                <p>Hint 1: the blinking stars are your guide. They link to different pages.
                  Also to go back, find the blinking star.</p>
                <p>Hint2: the topleft blinking star contains a pattern generating algorithm!</p>
                <p>When you're ready, click on the star!</p>
                <Link to='/home'><img src={star1} id='star' alt='Link to homepage'></img></Link>
                <a href='https://github.com/LeoniePeters' target="_blank" rel='noopener noreferrer' className='socialMedia'>
                  <img src={github}  id='github' alt='GitHub'></img></a>
                <a href='https://www.linkedin.com/in/leonie-e-peters/' target="_blank" rel='noopener noreferrer' className='socialMedia'>
                  <img src={linkedIn}  id='linkedIn' alt='LinkedIn'></img></a>
                  <a href='mailto:leoniepeters@gmail.com?subject=feedback' className='socialMedia'>
                <img src={mail}  id='mail' alt='Send me an e-mail'></img></a>
                <a href ='https://www.instagram.com/einoel89/' target="_blank" rel='noopener noreferrer' className='socialMedia'>
                <img src={instagram}  id='instagram' alt='Instagram'></img></a>            
                </div>
        );
    }
}

export default WelcomePage;
