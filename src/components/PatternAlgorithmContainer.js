import React, { Component } from 'react';
import { CompactPicker } from 'react-color';
import ToolTip from 'react-portal-tooltip'
import star2 from '../images/star-r1b3.png'
import HomePage from './HomePage'
import PatternAlgorithm from './PatternAlgorithm'
import './PatternAlgorithm.css'

class PatternAlgorithmContainer extends Component {
    state = {
        display: 'patternAlgorithm',
        color1: '#295ab3',
        color2: '#ff6600',
        isTooltipActive1: false,
        isTooltipActive2: false
    }

    showTooltip(tooltip) {
        this.setState({[tooltip]: true})
    }
    hideTooltip(tooltip) {
        this.setState({[tooltip]: false})
    }

    handleChangeComplete1 = (color) => {
        this.setState({ color1: color.hex });
    };

    handleChangeComplete2 = (color) => {
        this.setState({ color2: color.hex });
    };

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
                ctx.strokeStyle = this.state.color1
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.arc(x, y, r, 0, 2 * Math.PI);
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(x, y, q, 0, 2 * Math.PI);
                ctx.fillStyle = this.state.color2;
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
                    <PatternAlgorithm 
                    color1={this.state.color1}
                    color2={this.state.color2}
                    isTooltipActive1={this.state.isTooltipActive1}
                    isTooltipActive2={this.state.isTooltipActive2}
                    showTooltip={this.showTooltip}
                    hideTooltip={this.hideTooltip}
                    handleChangeComplete1={this.handleChangeComplete1}
                    handleChangeComplete2={this.handleChangeComplete2}
                    handleOnClick={this.handleOnClick}
                    patternAlgorithm={this.patternAlgorithm}
                    thiss={this}
                    />
                }
                {this.state.display === 'home' &&
                    <HomePage />}
            </div>
        );
    }
}

export default PatternAlgorithmContainer;