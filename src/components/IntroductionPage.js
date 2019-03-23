import React, { Component } from 'react';
import './IntroductionPage.css';

class IntroductionPage extends Component {

  render() {
    return (
      <div className='intro'>
      <p>I have always had a thing for patterns. You can resognise that in the clothing I wear,
      the drawings I make (this background is an example), the art that I love...
      When I started getting interested in code I discovered that coding is actually all about
      that too, patterns. </p>
      <p>Coding is recognising how different folders, files, data are linked and passed along.
      It's like a puzzle,the pieces have to fit. But the pieces are not always clearly provided.
      That is both the frustrating and the fun part of coding. Irregularities in the code's pattern cause bugs.
      But when you recognise the pattern, are in a coding flow, find the key that fits, 
      and make something actually work, that is all joy!
      </p>
      </div>
    );
  }
}

export default IntroductionPage;