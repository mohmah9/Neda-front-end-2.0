import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Searchcom from './search';
import DoctorProfile from "../DoctorProfile/DoctorProfile"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});
class ViewInfo extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      // doctors : []
    }
  }
  movetodoctor= e =>{
    return (
      <div>
      <DoctorProfile Doctor = {this.props.Doctor}/>
      </div>
    )
  }

  render(){
    return(
      <div>
        <Link to={{ pathname: '/DoctorProfile', Doctor: this.props.Doctor}} >
        <Paper onClick={this.movetodoctor} style={{boxShadow:"2px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
        <div>
        <div>
          <img src = {this.props.Doctor.picture} style = {{ width: "75px",
                   height: "75px",position : "absolute" , left : "5%", paddingTop : "2%"}}/>
        </div>
        <div style = {{'textAlign' : "right",'marginLeft' : "30%", paddingRight : "2%"}}>
              <br/>
              <p>دکتر {this.props.Doctor.first_name + " " + this.props.Doctor.last_name}</p> 
              <p>تخصص و فوق تخصص :  {this.props.Doctor.expertise}</p>
              <p> درباره پزشک : {this.props.Doctor.bio}</p>
               <br/>
        </div> 
        </div>
        
      </Paper>
      </Link>
      <br/>
      </div>
      
    )
  }
}

// let doctorlist= doctors.map(d => d.username)
// const doctorlist = [{"username" : "dsha"},{"username" : "fbhds"}]
class FullWidthGrid extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      doctors : []
    }
  }

  componentDidMount(){
    return fetch('http://127.0.0.1:8000/doctors/', {
      mode:"cors",
      method: 'GET',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
      }).then(response => {
        return response.json()
      }).then(json => {
                this.setState({
                  doctors: json
                })
                console.log(json)
            });
  }


  render(){
    const { classes } = this.props;
    return (
      <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item sm={9}>
            {this.state.doctors.length >= 1 ?(
              <div>
               {this.state.doctors.map(doctor => <ViewInfo Doctor = {doctor}/>)}
              </div>
            ) : null }         
        </Grid>
        <Grid item sm={3}>
          <Paper className={classes.paper}>
          </Paper>
        </Grid>
      </Grid>
    </div>
    )
  }
}

export default withStyles(styles)(FullWidthGrid);