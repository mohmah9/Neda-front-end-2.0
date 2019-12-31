import React from 'react';
import Fade from 'react-reveal/Fade';


const text = {
    position: "absolute",
    bottom: "20px",
    right: "20px",
    color: "white",
    paddingLeft: "20px",
    paddingRight: "20px",
}

export default class ReviewCard extends React.Component {

render(){
  return (
      <div>
        <div style = {{position: "relative"}}>
            <div style={{ position: "absolute",
                    float: "left",
                    bottom: "20px",
                    right: "20px",
                    color: "white",
                    paddingLeft: "20px",
                    paddingRight: "20px",}}>
                        <h1 >Are you new patient?</h1>
            <p>Get the best possible support during and after pregnancy by registering with your local health authority</p>
            </div>
            <img src={this.props.image}alt = " " style = {{width : "100%"}}  />
        </div> 
        </div>   
    );
    }
}