import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { connect } from "react-redux";
import * as token_api from "../../Redux/Rate/Rate_action";

class AddRate extends React.Component {
  constructor() {
    super();
 
    this.state = {
      rating: '',
      nextValue : ''
    };
  }
 
  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
    this.props.addRate(this.props.Doctor.medical_system_number, nextValue)
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

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  addRate: (doctor, rate) => dispatch(token_api.rateAction(doctor, rate))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddRate);

