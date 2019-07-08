/* eslint-disable no-unused-expressions */
import React from 'react';
import PropTypes from 'prop-types';
import './AppointmentTime.css'
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import DiologOpen from './DiologOpen';

class TimeTable extends React.Component {

    
  state = {
    open: false,
    color : "primary"
  };

  
  handleClick = () => {
    this.setState(state => ({
      open: !state.open,
      color : "primary"
    }));
  };

  handleClose = () => {
    this.setState(state => ({
      open: !state.open,
    }));
  };

  render() {
    let time = this.props.time.date_time.split('T')
    return (
      <div>

          <Button  variant = "contained"  fullWidth style = {{'marginTop' : "10%"}}
            onClick = {this.handleClick}>
            { time[1].slice(0, -1)}
           </Button>
          {this.state.open ? <DiologOpen  time = {this.props.time} color = {this.state.color}/> : null}
      </div>
    );
  }
}

TimeTable.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default class AppointmentTime extends React.Component{
    state = {
        open: false,
        appointment_times : [],
      };

      componentDidMount(){
        return fetch('http://nedabackend.pythonanywhere.com/appointment_times/?clinic='+ this.props.clinic.id , {
          mode:"cors",
          method: 'GET',
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
          }).then(response => {
            return response.json()
          }).then(json => {
                    this.setState({
                      appointment_times: json
                    })
                    console.log(json)
                });
      }
    
    handleClickAway = () => {
        this.setState({
          open: false,
        });
    };  
    
    render(){
      // {this.state.appointment_times.length >= 1 ? console.log(this.state.appointment_times.date_time.substring(0,4)) :null }
        return(
            <div>
                <ClickAwayListener onClickAway={this.handleClickAway}>
                 {this.state.appointment_times.length >= 1 ?
                 <div>
                    {this.state.appointment_times.map(time => !time.has_reserved && time.date_time.substring(0,4)==this.props.Day[2] && time.date_time.substring(5,7)==this.props.Day[0] &&time.date_time.substring(8,10)==this.props.Day[1]
                  ? <TimeTable time = {time} /> 
                  : null)}
                 </div>
                  : null}
                </ClickAwayListener>
            </div>
            
        )

    }
}
