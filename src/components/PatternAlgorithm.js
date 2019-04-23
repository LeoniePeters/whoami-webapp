import React from 'react';
import { CompactPicker } from 'react-color';
import ToolTip from 'react-portal-tooltip'
import star2 from '../images/star-r1b3.png'
import './PatternAlgorithm.css'

export default function PatternAlgorithm(props) {
  const { color1,
    color2,
    isTooltipActive1,
    isTooltipActive2,
    showTooltip,
    hideTooltip,
    handleChangeComplete1,
    handleChangeComplete2,
    handleOnClick,
    patternAlgorithm,
    thiss } = props

  return (
    <div>
      <div className='pattern'>
        <h1>Pattern generating algorithm</h1>
        <section>
          <p className='colorpicker'
            style={{ backgroundColor: color1 }}
            id="color1"
            onMouseEnter={showTooltip.bind(thiss, 'isTooltipActive1')}
            onMouseLeave={hideTooltip.bind(thiss, 'isTooltipActive1')}>
          </p>
          <ToolTip active={isTooltipActive1}
            position="bottom"
            arrow="center"
            parent="#color1">
            <div>
              <CompactPicker
                color={color1}
                onChangeComplete={handleChangeComplete1} />
            </div>
          </ToolTip>
          <p className='colorpicker'
            style={{ backgroundColor: color2 }}
            id="color2"
            onMouseEnter={showTooltip.bind(thiss, 'isTooltipActive2')}
            onMouseLeave={hideTooltip.bind(thiss, 'isTooltipActive2')}>
          </p>
          <ToolTip active={isTooltipActive2}
            position="bottom"
            arrow="center"
            parent="#color2">
            <div>
              <CompactPicker color={color2}
                onChangeComplete={handleChangeComplete2} />
            </div>
          </ToolTip>
          <button onClick={patternAlgorithm} className='patternButton'>Click to generate a pattern!</button>
        </section>
        <p>This is my gift to you as a visitor. Thanks for stopping by!
          If unsatisfied, click again. There are 2930 variations 8-)</p>
        <a href="#algoInfo">Want to know more?</a>
        <canvas id="myCanvas"
          width={500}
          height={500}
        > </canvas>

        <p id="algoInfo">I wrote an algorithm that creates a pattern by drawing
         circles and dots. The algorithm works like this:</p>
        <ol>
          <li>It generates a random number between 25 and 100 that determines
             the distance between circles.</li>
          <li>It generates a random number between 50 and 100 which determines
             the circle's radius.</li>
          <li>It draws a circle based on the generated random numbers and a
            filled circle(dot) one tenth the size of the outer circle.</li>
          <li>The code that generates circles and dots gets looped over x
            amount of times, as often so that the pattern fills the canvas.</li>
        </ol>
        <p>I did play around with the maximum and minimum proportions to make
          sure every outcome is delightful. This algorithm is a work in progress.
          In the future I will add the possibility for the user to pick their
          favourite color and generate a more personalised pattern based on some
          personal info the user can provide in a form.</p>
      </div>
      <img onClick={handleOnClick}
        src={star2}
        alt='star2'
        id="star2" />
    </div>

  );
}