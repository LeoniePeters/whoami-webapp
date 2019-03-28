import React, { Component } from 'react';
import star2 from '../images/star-r1b3.png'
import HomePage from './HomePage'
import './PatternAlgorithm.css'

class PatternAlgorithm extends Component {
    state = {
        display: 'patternAlgorithm'
    }

    handleOnClick = () => {
        this.setState({ display: 'home' })
    }

    patternAlgorithm = () => {
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        canvas.width = canvas.width;
        let randomNumber1 = Math.floor(Math.random() * 76 + 25)
        const r = Math.floor(Math.random() * 51 + 50)
        if (r - randomNumber1 >= 35) {
            randomNumber1 += 35
        }
        let x = randomNumber1
        let y = randomNumber1
        console.log(x, r)
        const x1 = x
        x = 0
        const y1 = y
        y = 0
        let a = 0
        let b = 0
        let q = 0.1 * r

        while (a <= Math.floor((500 + x1) / x1)) {
            while (b <= Math.floor((500 + x1) / x1)) {
                ctx.strokeStyle = "#295ab3"
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.arc(x, y, r, 0, 2 * Math.PI);
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(x, y, q, 0, 2 * Math.PI);
                ctx.fillStyle = '#ff6600';
                ctx.fill();

                x += x1;
                b++
            }
            x = 0
            y += y1;
            a++;
            b = 0;
        }
    }

    render() {
        return (
            <div>
                {this.state.display === 'patternAlgorithm' &&
                    <div>
                        <div className='pattern'>
                            <h1>Pattern generating algorithm</h1>
                            <button onClick={() => this.patternAlgorithm()}>Click to generate a pattern!</button>
                            <p>This is my gift to you as a visitor. Thanks for stopping by! 
                                If unsatisfied, click again. There are 2930 variations 8-)</p>
                            <a href="#algoInfo">Want to know more?</a>
                            <canvas id="myCanvas" width={500} height={500}
                            > </canvas>

                            <p id="algoInfo">I wrote an algorithm that creates a pattern by drawing circles and dots. The algorithm works like this:</p>
                            <ol>
                                <li>It generates a random number between 25 and 100 that determines the distance between circles.</li>
                                <li>It generates a random number between 50 and 100 which determines the circle's radius.</li>
                                <li>It draws a circle based on the generated random numbers and a filled circle(dot) one tenth the size of the outer circle.</li>
                                <li>The code that generates circles and dots gets looped over x amount of times, as often so that the pattern fills the canvas.</li>
                            </ol>
                            <p>I did play around with the maximum and minimum proportions to make sure every outcome is delightful.
                            This algorithm is a work in progress. In the future I will add the possibility
                            for the user to pick their favourite color and generate a more personalised pattern
                            based on some personal info the user can provide in a form.</p>
                        </div>
                        <img onClick={this.handleOnClick} src={star2} alt='star2' id="star2" />
                    </div>
                }
                {this.state.display === 'home' &&
                    <HomePage />}
            </div>
        );
    }
}

export default PatternAlgorithm;