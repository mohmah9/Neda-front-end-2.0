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

export default class Appointment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            patient: '',
            Clinic: '',
        }
    }

    componentWillMount() {
        Promise.all([
            fetch('http://nedabackend.pythonanywhere.com/patients/' + this.props.Appointment.patient + '/').then(value => value.json()),
            fetch('http://nedabackend.pythonanywhere.com/clinics/' + this.props.Appointment.clinic + '/').then(value => value.json()),
        ])
            .then((value) => {
                this.setState({
                    patient: value[0],
                    Clinic: value[1]
                });
            })
            .catch((err) => {
                console.log(err);
            });

    }
    reserveTime = async (e) => {
        console.log(this.props.Appointment.url)

        let x = await fetch(this.props.Appointment.url, {
            mode: "cors",
            method: 'PUT',
            body: JSON.stringify({
                has_reserved: false,
            }),
            headers: {
                "Content-type": "application/json;charset=UTF-8",
                "Authorization": "Token " + localStorage.getItem('token')
            }
        })

        await this.setState({ open: false })
        this.setState({ cancelled: true })
    };

    render() {
        return (
            <div>

                <Paper style={{ boxShadow: "2px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", width: "-webkit-fill-available" }}>
                    <div>


                        <div style={{ 'textAlign': "right", 'marginLeft': "0%", paddingRight: "2%" }}>
                            <br />
                            <p>
                                {this.state.patient.user ?
                                    <div>
                                        <p> {this.state.patient.user.first_name} {this.state.patient.user.last_name}</p>
                                    </div>
                                    : null
                                }
                            </p>
                            <p>{this.props.Appointment.date_time.substring(0, 10)} : تاریخ </p>
                            <p>ساعت : {this.props.Appointment.date_time.substring(11, 16)}</p>
                            {this.state.Clinic ?
                                <div>
                                    <p> مطب : {this.state.Clinic.name}</p>
                                </div>
                                : null
                            }


                            <br />
                        </div>
                        <Button variant="contained" color="primary" fullWidth onClick={this.reserveTime}>
                            کنسل</Button>
                    </div>
                </Paper>


                <br />
            </div>

        )
    }

}