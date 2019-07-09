import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
 
export default class AddRate extends React.Component {
  constructor() {
    super();
 
    this.state = {
      rating: ''
    };
  }
 
  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});

    fetch('http://nedabackend.pythonanywhere.com/doctor_rates/', {
        mode: "cors",
        method: 'POST',
        body: JSON.stringify({
            doctor : this.props.Doctor.medical_system_number,
             rate :  nextValue
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": "Token " + localStorage.getItem('token')
        }
    }).then(response => {
        return response.json()
    }).then(json => {
        console.log(json)
    });

}; 
  
 
  render() {
    
    return (                
      <div>
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={this.state.rating}
          onStarClick={this.onStarClick.bind(this)}
        />
      </div>
    );
  }
}
