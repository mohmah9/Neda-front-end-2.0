import React from 'react';
import PropTypes from 'prop-types';
import './AppointmentTime.css'
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import DiologOpen from './DiologOpen';
import Dialogfalse from './Diologfalse'
import { connect } from "react-redux";
import * as doctorProfile_api from "../../Redux/DoctorProfile/DoctorProfile_action"

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
          {this.state.open ? sessionStorage.getItem('kind')==="patient"? <DiologOpen  time = {this.props.time} color = {this.state.color}/>:<Dialogfalse/>  : null}
      </div>
    );
  }
}

TimeTable.propTypes = {
  classes: PropTypes.object.isRequired,
};


class AppointmentTime extends React.Component{
    state = {
        open: false,
        appointment_times : [],
      };

      componentDidMount(){//ghablan be id request mizadim va alan id nadare va felan dasti dadam ???????????

        this.props.appointmenttime_load(4)
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
                
                 <div>
                    {this.props.appointment_times.map(time => !time.has_reserved && time.date_time.substring(0,4)===this.props.Day[2] && time.date_time.substring(5,7)===this.props.Day[0] &&time.date_time.substring(8,10)===this.props.Day[1]
                  ? <TimeTable time = {time} /> 
                  : null)}
                 </div>
                
                </ClickAwayListener>
            </div>
        )
    }
}

const mapStateToProps = state => ({
  ...state,
  appointment_times : state.DoctorProfile_reducer.appointmentTime_result,
 
});

const mapDispatchToProps = dispatch => ({
  appointmenttime_load: (id) => dispatch(doctorProfile_api.appointmenttime_load(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentTime)
