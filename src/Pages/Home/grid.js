import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Searchcom from './search';
import DoctorProfile from "../DoctorProfile/DoctorProfile"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Filters from "./Filters"
import { Button } from '@material-ui/core';


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
class ViewInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // doctors : []
    }
  }
  movetodoctor = e => {
    return (
      <div>
        <DoctorProfile Doctor={this.props.Doctor} />
      </div>
    )
  }

  render() {
    return (
      <div>
        <Link to={{ pathname: '/DoctorProfile', data : { Doctor: this.props.Doctor}}} style={{ textDecoration: "none" }} >
          <Button fullWidth >
            <Paper onClick={this.movetodoctor} style={{ boxShadow: "2px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", width: "-webkit-fill-available" }}>
              <div>
                <div>
                  <img src={this.props.Doctor.picture} style={{
                    width: "75px",
                    height: "75px", position: "absolute", left: "5%", paddingTop: "2%" 
                  }}  alt = " "/>
                </div>
                <div style={{ 'textAlign': "right", 'marginLeft': "30%", paddingRight: "2%" }}>
                  <br />
                  <p>دکتر {this.props.Doctor.user.first_name + " " + this.props.Doctor.user.last_name}</p>
                  <p>تخصص و فوق تخصص :  {this.props.Doctor.expertise}</p>
                  <p> درباره پزشک : {this.props.Doctor.bio}</p>
                  <br />
                </div>
              </div>
            </Paper>
          </Button>
        </Link>
        <br />
      </div>

    )
  }
}

// let doctorlist= doctors.map(d => d.username)
// const doctorlist = [{"username" : "dsha"},{"username" : "fbhds"}]
class FullWidthGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doctors: [],
      filters: []
    }
  }



  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item sm={9}>
            {this.props.result.length >= 1 ? (
              <div>
                {this.props.result.map(doctor => <ViewInfo Doctor={doctor} />)}
              </div>
            ) : null}
          </Grid>
          <Grid item sm={3}>
            <Paper className={classes.paper}>
              <Filters filtering={this.props.filtering} />
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(FullWidthGrid);