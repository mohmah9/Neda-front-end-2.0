import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import MenuAppBar from './NavBar'
import DoctorProfile from "../DoctorProfile/DoctorProfile"
import TextField from '@material-ui/core/TextField';
import Province from '../PatientProfile/Province'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";
import { async } from 'q';
import ViewAndEditDoctorInformation from './Viewinfo'
import Appointment from './Appointments'
import Addclinic from './Addclinic'


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

class ViewAppointment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            timeresult: [],
        }
    }

    componentDidMount() {
        console.log(this.props.Doctor.medical_system_number)
        return fetch("http://nedabackend.pythonanywhere.com/appointment_times/?doctor=" + this.props.Doctor.medical_system_number, {
            mode: "cors",
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            }
        })
            .then(response => {
                return response.json()
            }).then(json => {
                console.log(json)
                this.setState({ timeresult: json })
            });
    }


    render() {
        return (
             <div>
                 {this.state.timeresult.length >= 1 ?
                 <div>
                     { this.state.timeresult.map(time => time.has_reserved != false 
                     ?<Appointment Appointment={time} /> : null) }
            
                 </div> 
                  : "loading ..."} 
                 </div>
        )
    }

}


class Doc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            doctor: [],
            addclinic: false
        }
    }

    componentWillMount() {
        fetch('http://nedabackend.pythonanywhere.com/doctors/', {
            mode: "cors",
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "Token " + localStorage.getItem('token')
            }
        }).then(response => {
            return response.json()
        }).then(json => {
            console.log(json)
            this.setState({ doctor: json })
        });


    }

    handleclinic = (e) => {
        this.setState({
            addclinic: true
        })
    }
    render() {
        const { classes } = this.props;
        console.log(this.state.doctor)
        console.log(this.state.timeresult)
        return (
            <div>
                <MenuAppBar />
                <div className={classes.root}>
                    <Grid container spacing={24}>
                        <Grid item sm={7} style={{ paddingTop: "2%", paddingLeft: "5%", paddingRight: "5%" }}>
                            {this.state.doctor.length >= 1 ?
                                <ViewAppointment Doctor={this.state.doctor[0]} />
                                : "loading ...."
                            }
                        </Grid>
                        <Grid item sm={5} style={{ paddingTop: "2%", paddingRight: "2%" }}>
                            <Paper className={classes.paper}>
                                {this.state.doctor.length >= 1 ?
                                    <ViewAndEditDoctorInformation doctor={this.state.doctor[0]} />
                                    : null
                                }
                            </Paper>
                            <Paper className={classes.paper} style={{ marginTop: "3%" }}>
                                {this.state.addclinic ?
                                    <Addclinic doctor = {this.state.doctor[0]}/>
                                    : <Button variant="contained" color="primary" fullWidth onClick={this.handleclinic}>
                                        <h4>Add clinic</h4>
                                    </Button>}
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}
export default withStyles(styles)(Doc);