import React, { Component } from 'react';
import star2 from '../images/star-r1b3.png'
import HomePage from './HomePage'

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
        const randomNumber1 = Math.floor(Math.random() * 75 + 25)
        let x = randomNumber1
        let y = randomNumber1
        const r = Math.floor(Math.random() * 50 + 50)
        const x1 = x
        x = 100
        const y1 = y
        y = 100
        let a = 1
        let b = 1
        let q = 0.1 * r

        while (a < Math.floor(450 / r) && a < Math.floor(450 / x1)) {
            while (b < Math.floor(450 / r) && b < Math.floor(450 / x1)) {
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
            x = 100
            y += y1;
            a++;
            b = 1;
        }
    }

    render() {
        return (
            <div>
                {this.state.display === 'patternAlgorithm' &&
                    <div>
                        <div className='intro'>
                            <p>Click on the button to generate a pattern!</p>
                            <p>This is my gift to you as a visitor. Thanks for stopping by!</p>
                            <button onClick={() => this.patternAlgorithm()}>click!</button>
                            <canvas id="myCanvas" width={500} height={500} 
                            > </canvas>
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