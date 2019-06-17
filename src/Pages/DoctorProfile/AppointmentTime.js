/* eslint-disable no-unused-expressions */
import React from 'react';
import PropTypes from 'prop-types';
import './AppointmentTime.css'
import Times from './Times'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import DiologOpen from './DiologOpen';

let patient = {
  Name : 'مریم',
  LastName : 'افشار',
};

function ViewAppointmentInformation(props){

  return(
    <div style = {{'textAlign' : "right"}}>
      <p> {props.patient.Name} {props.patient.LastName} عزیز</p>
      <p>برای تاریخ 10  تیر ساعت 4 بعد از ظهر در مطب دکتر {props.Doctor.first_name} {props.Doctor.last_name} برای شمارزرو موقت شد </p>
      <p>برای قطعی شدن رزرو کلید پرداخت را بزنید</p>
  
    </div>
    
  )
}

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
    return (
      <div>

          <Button  variant = "contained" color = "primary" fullWidth style = {{'marginTop' : "10%"}}
            onClick = {this.handleClick}>
            {this.props.time.date_time}
           </Button>
          {this.state.open ? <DiologOpen Doctor = {this.props.Doctor} time = {this.props.time} token = {this.props.token} /> : null}
      </div>
    );
  }
}

TimeTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

// const btn  = Times.map(time => <TimeTable  Start = {time.start}/>)


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
                 {this.state.appointment_times.map(time => !time.has_reserved ? <TimeTable  Doctor = {this.props.Doctor} time = {time} token = {this.props.token}/> : null)}
                </ClickAwayListener>
            </div>
            
        )

    }
}
