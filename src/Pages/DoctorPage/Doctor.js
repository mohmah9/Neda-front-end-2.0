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

const BootstrapInput = withStyles(theme => ({
    root: {
        'label + &': {
            marginTop: theme.spacing.unit * 3,
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        width: 'auto',
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

let patient = {
    "url": "http://nedabackend.pythonanywhere.com/doctors/%D8%AF156-589/",
    "user": {
        "url": "http://nedabackend.pythonanywhere.com/users/4/",
        "username": "reza",
        "password": "pbkdf2_sha256$150000$090a5AZMEuWS$egQSdcqU25xenJv6/rwP73Aw+q2SchK9rHXz9uoR4PM=",
        "first_name": "رضا",
        "last_name": "راضی",
        "email": "reza@gmail.com",
        "province": "تهران"
    },
    "gender": "مرد",
    "medical_system_number": "د156-589",
    "expertise": "متخصص قلب و عروق",
    "date_of_birth": null,
    "mobile_number": "09368968781",
    "bio": "درباره شما :)",
    "picture": "http://nedabackend.pythonanywhere.com/Media/Profile%20Pictures/Doctors/default.png",
    "doctor_rates": [
        {
            "url": "http://nedabackend.pythonanywhere.com/doctor_rates/1/",
            "rate": 2.5,
            "user": "http://nedabackend.pythonanywhere.com/users/2/",
            "doctor": "http://nedabackend.pythonanywhere.com/doctors/%D8%AF156-589/"
        }
    ],
    "doctor_comments": []
}

class ViewAndEditPatientInformation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: this.props.patient.user.first_name,
            last_name: this.props.patient.user.last_name,
            username: this.props.patient.user.username,
            password: this.props.patient.user.password,
            mobile_number: this.props.patient.mobile_number,
            province: this.props.patient.user.province,
            email: this.props.patient.user.email,

            social_number: this.props.patient.social_number,
            gender: this.props.patient.gender,
            phone_number: this.props.patient.phone_number,
            address: this.props.patient.address,
            date_of_birth: "1360-01-14",
            medical_system_number: this.props.patient.user.medical_system_number

        }
    }


    handleChanger(e) {
        this.setState({ [e.target.name]: e.target.value });
    };
    handleChangerr = event => {
        // this.setState({ selectedFilter: event.target.value })
        this.selectedFilters = event.target.value
        this.setState({ province: event.target.value })
        console.log(this.selectedFilters)

    }

    handleEditpatient = e => {
        fetch('http://nedabackend.pythonanywhere.com/patients/0012356987/', {
            mode: "cors",
            method: 'PUT',
            body: JSON.stringify({
                user: {
                    first_name: this.state.first_name,
                    last_name: this.state.last_name,
                    username: this.state.username,
                    password: this.state.password,
                    province: this.state.province,
                    email: this.state.email,
                },
                mobile_number: this.state.mobile_number,
                social_number: this.state.social_number,
                phone_number: this.state.phone_number,
                address: this.state.address,
                date_of_birth: "1360-01-14",
                gender: this.state.gender,
                medical_system_number: this.state.medical_system_number
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "Token " + localStorage.getItem('token')
            }
        }).then(response => {
            return response.json()
        }).then(json => {
            console.log(json)
        });

    };

    render() {
        return (
            <div>
                <div className="fields">
                    <TextField id="outlined-email-input" value={this.state.first_name} onChange={this.handleChanger.bind(this)} fullWidth className="usertext" label="Name" type="Name" name="first_name" margin="normal" variant="outlined" />
                </div>
                <div className="fields">
                    <TextField id="outlined-password-input" value={this.state.last_name} onChange={this.handleChanger.bind(this)} fullWidth className="passtext" label="Last name" name="last_name" type="Name" margin="normal" variant="outlined" />
                </div>
                <div className="fields">
                    <TextField id="outlined-email-input" fullWidth className="usertext" label="User Name" type="Name" name="username" margin="normal" variant="outlined" />
                </div>
                <div className="fields">
                    <TextField id="outlined-email-input" value={this.state.email} onChange={this.handleChanger.bind(this)} fullWidth className="usertext" label="Email" type="eamil" name="email" autoComplete="email" margin="normal" variant="outlined" />
                </div>
                <div className="fields">
                    <TextField id="outlined-password-input" fullWidth className="passtext" label="Password" name="password" type="password" margin="normal" variant="outlined" />
                </div>
                <div className="fields">
                    <TextField id="outlined-email-input" value={this.state.social_number} onChange={this.handleChanger.bind(this)} fullWidth className="usertext" label="Social Number" type="text" name="social_number" margin="normal" variant="outlined" />
                </div>
                <div className="fields">
                    <TextField id="outlined-password-input" value={this.state.mobile_number} onChange={this.handleChanger.bind(this)} fullWidth className="passtext" label="mobile Number" type="tel" name="mobile_number" margin="normal" variant="outlined" />
                </div>
                <div className="fields">
                    <TextField id="outlined-password-input" value={this.state.phone_number} onChange={this.handleChanger.bind(this)} fullWidth className="passtext" label="phone number" name="phone_number" type="text" margin="normal" variant="outlined" />
                </div>
                <div className="fields">
                    <TextField id="outlined-password-input" value={this.state.address} onChange={this.handleChanger.bind(this)} fullWidth className="passtext" label="address" name="address" type="text" margin="normal" variant="outlined" />
                </div>
                <div className="fields">
                    <TextField id="outlined-password-input" value={this.state.date_of_birth} onChange={this.handleChanger.bind(this)} fullWidth className="passtext" label="birth day" name="date_of_birth" type="text" margin="normal" variant="outlined" />
                </div>
                <div className="fields">
                    <FormControl className="fields" style={{ display: "block" }}>
                        <InputLabel htmlFor="age-customized-select" >
                            Province
                      </InputLabel>
                        <Select
                            value={this.state.province}
                            onChange={this.handleChangerr}
                            name="province"
                            input={<BootstrapInput name="age" id="age-customized-select" />}
                            style={{ 'marginLeft': "50%" }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {Province.map(p => (<MenuItem name={p.value} value={p.value} /*onclick = {() => this.setState({selectedFilter : p.value})}*/ onclick={this.handleChanger.bind(this)}>{p.value}</MenuItem>))}

                        </Select>
                    </FormControl>
                </div>


                <br />
                <div className="fields">
                    <Button variant="contained" onClick={this.handleEditpatient} color="primary" fullWidth>
                        Edit
                   </Button>
                </div>
                <br />

            </div>
        )
    }
}

class ViewInfo extends React.Component {

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

                <Paper /*onClick={this.movetodoctor}*/ style={{ boxShadow: "2px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", width: "-webkit-fill-available" }}>
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
class Addclinic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            doctors: [],
            filters: [],
            social: "د156-589",
            timeresult: [],
            clinicname: "",
            clinic_phone_number: "",
            clinicaddress: "",
            clinicprovince: ""

        }
    }

    handleChanger(e) {
        this.setState({ [e.target.name]: e.target.value });
    };
    handleChangerr = event => {
        this.selectedFilters =event.target.value
        this.setState({ clinicprovince: event.target.value })
        console.log(this.selectedFilters)
      }
    // "name": "تهرانپارس",
    // "province": "تهران",
    // "phone_number": "77889568",
    // "address": "تهرانپارس، میدان رسالت",
    // "doctor": "د156-589"
    handleaddclinic = e => {
        fetch('http://nedabackend.pythonanywhere.com/clinics/', {
            mode: "cors",
            method: 'POST',
            body: JSON.stringify({
                name: this.state.clinicname,
                province: this.state.clinicprovince,
                phone_number: this.state.clinic_phone_number,
                address: this.state.clinicaddress,
                doctor: patient.medical_system_number
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "Token " + localStorage.getItem('token')
            }
        }).then(response => {
            return response.json()
        }).then(json => {
            console.log(json)
        });

    }
    render() {
        return (
            <div>
                <h4>Add Clinic</h4>
                <div className="fields">
                    <TextField id="outlined-email-input" required onChange={this.handleChanger.bind(this)} fullWidth className="usertext" label="Name" type="Name" name="clinicname" margin="normal" />
                </div>
                <div className="fields">
                    <TextField id="outlined-password-input" required onChange={this.handleChanger.bind(this)} fullWidth className="userttext" label="Phone number" name="clinic_phone_number" type="tel" margin="normal" />
                </div>
                <div className="fields">
                    <TextField id="outlined-email-input" required onChange={this.handleChanger.bind(this)} fullWidth className="usertext" label="Address" type="Name" name="clinicaddress" margin="normal" />
                </div>
                <div className="fields">
                    <FormControl className="fields" style={{ display: "block" }}>
                        <InputLabel htmlFor="age-customized-select" >
                            Province
                    </InputLabel>
                        <Select
                            value={this.state.clinicprovince}
                            onChange={this.handleChangerr}
                            name="clinicprovince"
                            input={<BootstrapInput name="age" id="age-customized-select" />}
                            style={{ 'marginLeft': "50%" }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {Province.map(p => (<MenuItem name={p.value} value={p.value} onclick={this.handleChanger.bind(this)}>{p.value}</MenuItem>))}

                        </Select>
                    </FormControl>
                </div>
                <br/>
                <Button  variant="contained" onClick = {this.handleaddclinic} color = "primary" fullWidth>
                    Add clinic
                 </Button>
            </div>
        )
    }

}
class Doc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            doctors: [],
            filters: [],
            social: "د156-589",
            timeresult: [],
            addclinic: false
        }
    }


    componentWillMount() {
        return fetch('http://nedabackend.pythonanywhere.com/appointment_times/?doctor=' + this.state.social, {
            mode: "cors",
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => {
            return response.json()
        }).then(json => {
            this.setState({
                timeresult: json
            })
            console.log(json)
        });
    }

    handleclinic = (e) => {
        this.setState({
            addclinic: true
        })
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <MenuAppBar />
                <div className={classes.root}>
                    <Grid container spacing={24}>
                        <Grid item sm={7} style={{ paddingTop: "2%", paddingLeft: "5%", paddingRight: "5%" }}>
                            {/* <Paper className={classes.paper} > */}
                            {this.state.timeresult ?
                                <div>
                                    {this.state.timeresult.map(time => <ViewInfo Appointment={time} />)}
                                </div>
                                : "loading ...."
                            }
                            {/* </Paper> */}
                        </Grid>
                        <Grid item sm={5} style={{ paddingTop: "2%", paddingRight: "2%" }}>
                            <Paper className={classes.paper}>
                                <ViewAndEditPatientInformation patient={patient} />
                            </Paper>
                            <Paper className={classes.paper} style={{ marginTop: "3%" }}>
                                {this.state.addclinic ?
                                    <Addclinic />
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