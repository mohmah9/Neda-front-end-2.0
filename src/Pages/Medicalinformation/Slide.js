import React, { Component } from "react";
import Slider from "react-slick";
import Card from './Card'
import s from "../../Images/1.jpg"
import nurse from "../../Images/2.jpg"
import eye from "../../Images/eye.jpg"
import brain from "../../Images/3.jpg"
import hearth from "../../Images/hearth.jpg"
import dep from "../../Images/1jpg.jpg"
import den from "../../Images/den.jpg"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default class Slide extends Component {

  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true
    };

    return (
      <div>
        <h2 style = {{paddingLeft : "85%"}}>مطالب پیشنهادی</h2>
        <Slider {...settings}>
          <div>
            <Card image = {nurse}/>
          </div>
          <div>
            <Card image = {eye}/>
          </div>
          <div>
            <Card image = {hearth}/>
          </div>
          <div>
            <Card image = {brain}/>
          </div>
          <div>
            <Card image = {s}/>
          </div>
          <div>
            <Card image = {dep}/>
          </div>
          <div>
            <Card image = {den}/>
          </div>
        </Slider>
      </div>
    );
  }
}