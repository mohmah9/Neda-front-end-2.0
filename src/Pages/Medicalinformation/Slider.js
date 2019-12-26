import React, { Component } from "react";
// import Slider from "react-slick";
import Card from './SliderCard'
import food from "../../Images/food.jpg";
import nurse from "../../Images/drug.jpg";
import hearth from "../../Images/blood.jpg"
import Fade from 'react-reveal/Fade';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import styled, { css } from 'styled-components';

const Container = styled.div`
  border: 1px solid grey;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 500px;
`;
const CarouselUI = ({ children }) => <Container>{children}</Container>;
const Carousel = makeCarousel(CarouselUI);

export default class PauseOnHover extends Component {

  render (){

    return(

        <Carousel defaultWait={4000} /*wait for 1000 milliseconds*/ >
        <Slide right>
          <div>
          <Card image = {food}/>
          <Fade bottom>
          <div style ={{position : "relative"}}>
            <h1>helooo</h1>
            <p>Slide Description</p>
          </div>
          </Fade>
          </div>
        </Slide>
        <Slide right>
          <div>
          <Card image = {nurse}/>
          <Fade bottom>
          <div style ={{position : "relative"}}>
            <p>Slide Description</p>
          </div>
          </Fade>
          </div>
        </Slide>
        <Slide right>
          <div>
          <Card image = {hearth}/>
            <p>Slide Description</p>
          </div>
        </Slide>
      </Carousel>
      );
    }
  // render() {
  //   const settings = {
  //     dots: true,
  //     infinite: true,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     autoplaySpeed: 4000,
  //     pauseOnHover: true
  //     };

  //   return (
  //     <div>
  //       <h2 style = {{paddingLeft : "85%"}}>مطالب پیشنهادی</h2>
  //       <Slider {...settings}>
  //         <div>
  //           <Card image = {nurse}/>
  //         </div>
  //         <div>
  //           <Card image = {hearth}/>
  //         </div>
  //       </Slider>
  //     </div>
  //   );
  // }
}