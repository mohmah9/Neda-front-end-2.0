import React from 'react';
import nurse from '../../Images/comp.jpg';

const fadeImages = [
  nurse
];


const fadeProperties = {
  duration: 5000,
  transitionDuration: 1000,
  infinite: true,
  indicators: true
}

export default class Slides extends React.Component {
  render() {
    return (
      <div className='banner' >
        <img src={nurse} style={{ width: "100%", height: "100%" }}></img>
      </div>
    )
  }
}
