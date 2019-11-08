import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

export default class Rate extends React.Component {

  render() {
    return (
      <div>
        <StarRatingComponent
          name="rate1"
          starCount={5}
          editing={false}
          value={this.props.Rate}
        />
      </div>
    );
  }
}
  