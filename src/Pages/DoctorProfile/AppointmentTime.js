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
  };

  
  handleClick = () => {
    this.setState(state => ({
      open: !state.open,
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

          <Button  variant = "contained" color = "primary" fullWidth style = {{'marginTop' : "10%"}}
            onClick = {this.handleClick}>
            {time[1].slice(0, -1)}
           </Button>
          {this.state.open ? <DiologOpen Doctor = {this.props.Doctor} time = {this.props.time} token = {this.props.token} /> : null}
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
      
        return(
            <div>
                <ClickAwayListener onClickAway={this.handleClickAway}>
                 {this.state.appointment_times.map(time => !time.has_reserved 
                  ? <TimeTable  Doctor = {this.props.Doctor} time = {time} token = {this.props.token}/> 
                  : null)}
                </ClickAwayListener>
            </div>
            
        )

    }
}
