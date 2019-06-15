/* eslint-disable no-unused-expressions */
import React from 'react';
import PropTypes from 'prop-types';
import './AppointmentTime.css'
import Times from './Times'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
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
    const { open } = this.state;
    return (
      <div>

          <Button  variant = "contained" color = "primary" fullWidth style = {{'marginTop' : "10%"}}
            onClick = {this.handleClick}>
            {this.props.Start}
           </Button>
          {open ? <DiologOpen/> : null}
      </div>
    );
  }
}

TimeTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

const btn  = Times.map(time => <TimeTable  Start = {time.start}/>)


export default class AppointmentTime extends React.Component{
    state = {
        open: false,
      };
    
    handleClickAway = () => {
        this.setState({
          open: false,
        });
    };  
    
    render(){
        return(
            <div>
                <ClickAwayListener onClickAway={this.handleClickAway}>
                        {btn}
                    
                </ClickAwayListener>
            </div>
            
        )

    }
}
