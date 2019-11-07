import React from 'react'
import './Signup.css'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { connect } from "react-redux";
import * as token_api from "../../Redux/Signup/Signup_action";


function TabContainer({ children, dir }) {
    return (
        <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
};

const styles = theme => ({
    root: {

        backgroundColor: theme.palette.background.paper,
        width: 500,
    },
});

class FullWidthTabs extends React.Component {
    state = {
        correct: "f",
        value: 0,
        first_name: "",
        last_name: "",
        username: "",
        password: "",
        mobile_number: "",
        province: null,
        email: "",
        is_doctor: false,
        is_patient: false,
        is_hospital: false,
        social_number: "",
        gender: "",
        phone_number: "",
        address: "",
        date_of_birth: "1360-01-14",
        medical_system_number: "",
        expertise: "",
        post_code: ""

    };

    handleChange = (event, value) => {
        this.setState({ value });
    };
    handleChangerr = event => {
        this.setState({ value: event.target.value });
        this.setState({ [event.target.name]: event.target.value })
    };
    handleChangeIndex = index => {
        this.setState({ value: index });
    };
    handleChanger(e) {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        const { classes, theme } = this.props;

        return (
            <div className='Signup'>
                <div className={classes.root} style={{ 'backgroundColor': "lightGray" }}>
                    <AppBar position="static" color="default">
                        <Tabs
                            value={this.state.value}
                            onChange={this.handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            variant="fullWidth"
                        >
                            <Tab label="Patient" />
                            <Tab label="Doctor" />
                            <Tab label="Hospital" />
                        </Tabs>
                    </AppBar>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={this.state.value}
                        onChangeIndex={this.handleChangeIndex}
                    >
                        <TabContainer dir={theme.direction} ><h1 ><center>Patient</center></h1>
                            <div className="fields">
                                <TextField id="outlined-email-input" required onChange={this.handleChanger.bind(this)} fullWidth className="usertext" label="Name" type="Name" name="first_name" margin="normal" />
                            </div>
                            <div className="fields">
                                <TextField id="outlined-password-input" required onChange={this.handleChanger.bind(this)} fullWidth className="passtext" label="Last name" name="last_name" type="Name" margin="normal" />
                            </div>
                            <div className="fields">
                                <TextField id="outlined-email-input" required onChange={this.handleChanger.bind(this)} fullWidth className="usertext" label="User Name" type="Name" name="username" margin="normal" />
                            </div>
                            <div className="fields">
                                <TextField id="outlined-email-input" required onChange={this.handleChanger.bind(this)} fullWidth className="usertext" label="Email" type="eamil" name="email" autoComplete="email" margin="normal" />
                            </div>
                            <div className="fields">
                                <TextField id="outlined-password-input" required onChange={this.handleChanger.bind(this)} fullWidth className="passtext" label="Password" name="password" type="password" margin="normal" />
                            </div>
                            <div className="fields">
                                <TextField id="outlined-email-input" required onChange={this.handleChanger.bind(this)} fullWidth className="usertext" label="Social Number" type="text" name="social_number" margin="normal" />
                            </div>
                            <div className="fields">
                                <TextField id="outlined-password-input" required onChange={this.handleChanger.bind(this)} fullWidth className="passtext" label="mobile Number" type="tel" name="mobile_number" margin="normal" />
                            </div>
                            <div style={{ paddingLeft: "15%" }}>
                                <FormControl component="fieldset" className={classes.formControl}>
                                    <FormLabel component="legend">Gender</FormLabel>
                                    <RadioGroup
                                        aria-label="Gender"
                                        name="gender"
                                        className={classes.group}
                                        value={this.state.value}
                                        onChange={this.handleChangerr}
                                    >
                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    </RadioGroup>
                                </FormControl>
                            </div>
                            <div><p style={{ color: "red" }}>{this.state.correct == false ? "There is something wrong with the information you provided" : ""}</p></div>
                            <div className='btn-submit'>
                                <Button onClick={() => this.props.patient_signup(this.state.first_name,this.state.last_name,this.state.username,this.state.password,this.state.mobile_number,this.state.email,false,true,false,this.state.social_number,this.state.gender)} variant="contained" color="primary" fullWidth>
                                    submit
                    </Button>
                            </div>
                        </TabContainer>
                        <TabContainer dir={theme.direction}><h1 ><center>Doctor</center></h1>
                            <div className="fields">
                                <TextField id="outlined-email-input" required onChange={this.handleChanger.bind(this)} fullWidth className="usertext" label="Name" type="Name" name="first_name" margin="normal" />
                            </div>
                            <div className="fields">
                                <TextField id="outlined-password-input" required onChange={this.handleChanger.bind(this)} fullWidth className="passtext" label="Last name" name="last_name" type="Name" margin="normal" />
                            </div>
                            <div className="fields">
                                <TextField id="outlined-email-input" required onChange={this.handleChanger.bind(this)} fullWidth className="usertext" label="User Name" type="Name" name="username" margin="normal" />
                            </div>
                            <div className="fields">
                                <TextField id="outlined-email-input" required onChange={this.handleChanger.bind(this)} fullWidth className="usertext" label="Email" type="Name" name="email" autoComplete="email" margin="normal" />
                            </div>
                            <div className="fields">
                                <TextField id="outlined-password-input" required onChange={this.handleChanger.bind(this)} fullWidth className="passtext" label="Password" type="password" name="password" margin="normal" />
                            </div>
                            <div className="fields">
                                <TextField id="outlined-email-input" required onChange={this.handleChanger.bind(this)} fullWidth className="usertext" label="Medical system Number" type="text " name="medical_system_number" margin="normal" />
                            </div>
                            <div className="fields">
                                <TextField id="outlined-password-input" required onChange={this.handleChanger.bind(this)} fullWidth className="passtext" label="mobile Number" name="mobile_number" type="tel" margin="normal" />
                            </div >
                            <div className="fields">
                                <TextField id="outlined-password-input" required onChange={this.handleChanger.bind(this)} fullWidth className="passtext" label="Expertise" name="expertise" type="text" margin="normal" />
                            </div >
                            <div className="fields">
                                <TextField id="outlined-password-input" required onChange={this.handleChanger.bind(this)} fullWidth className="passtext" label="province" name="province" type="text" margin="normal" />
                            </div>
                            <div style={{ paddingLeft: "15%" }}>
                                <FormControl component="fieldset" className={classes.formControl}>
                                    <FormLabel component="legend">Gender</FormLabel>
                                    <RadioGroup
                                        aria-label="Gender"
                                        name="gender"
                                        className={classes.group}
                                        value={this.state.value}
                                        onChange={this.handleChangerr}
                                    >
                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    </RadioGroup>
                                </FormControl>
                            </div>
                            <div><p style={{ color: "red" }}>{this.state.correct == false ? "There is something wrong with the information you provided" : ""}</p></div>
                            <div className='btn-submit'>
                                <Button variant="contained" onClick={() => this.props.doctor_signup(this.state.first_name,this.state.last_name,this.state.username,this.state.password,this.state.mobile_number,this.state.email,true,false,false,this.state.date_of_birth,this.state.medical_system_number,this.state.gender,this.state.expertise,this.state.province)} color="primary" fullWidth>
                                    submit
                    </Button>
                            </div>
                        </TabContainer>
                        <TabContainer dir={theme.direction}><h1 ><center>Hospital</center></h1>
                            <div className="fields">
                                <TextField id="outlined-email-input" required onChange={this.handleChanger.bind(this)} fullWidth className="usertext" label="Name" type="Name" name="first_name" margin="normal" />
                            </div>
                            <div className="fields">
                                <TextField id="outlined-password-input" required onChange={this.handleChanger.bind(this)} fullWidth className="passtext" label="Address" type="text" name="address" margin="normal" />
                            </div>
                            <div className="fields">
                                <TextField id="outlined-email-input" required onChange={this.handleChanger.bind(this)} fullWidth className="usertext" label="User Name" type="Name" name="username" margin="normal" />
                            </div>
                            <div className="fields">
                                <TextField id="outlined-email-input" required onChange={this.handleChanger.bind(this)} fullWidth className="usertext" label="Email" type="Name" name="email" autoComplete="email" margin="normal" />
                            </div>
                            <div className="fields">
                                <TextField id="outlined-password-input" required onChange={this.handleChanger.bind(this)} fullWidth className="passtext" label="Password" name="password" type="password" margin="normal" />
                            </div>
                            <div className="fields">
                                <TextField id="outlined-email-input" required onChange={this.handleChanger.bind(this)} fullWidth className="usertext" label="Postal code" type="test" name="post_code" margin="normal" />
                            </div>
                            <div className="fields">
                                <TextField id="outlined-password-input" required onChange={this.handleChanger.bind(this)} fullWidth className="passtext" label="province" name="province" type="text" margin="normal" />
                            </div>
                            <div className="fields">
                                <TextField id="outlined-password-input" required onChange={this.handleChanger.bind(this)} fullWidth className="passtext" label="phone number" name="phone_number" type="text" margin="normal" />
                            </div>
                            <div><p style={{ color: "red" }}>{this.state.correct == false ? "There is something wrong with the information you provided" : ""}</p></div>
                            <div className='btn-submit'>
                                <Button variant="contained" onClick={() => this.props.hospital_signup(this.state.first_name,this.state.address,this.state.username,this.state.password,this.state.email,false,false,true,this.state.phone_number,this.state.post_code,this.state.province)} color="primary" fullWidth>
                                    submit
                    </Button>
                            </div>
                        </TabContainer>
                    </SwipeableViews>
                </div>
                <br />
            </div>
        );
    }
}

FullWidthTabs.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    // loginAction: (user, pass) => dispatch(token_api.loginAction(user, pass))
    patient_signup: (first_name,last_name,username,password,mobile_number,email,is_doctor,is_patient,is_hospital,social_number,gender) => dispatch(token_api.patient_signup(first_name,last_name,username,password,mobile_number,email,is_doctor,is_patient,is_hospital,social_number,gender)),
    doctor_signup: (first_name,last_name,username,password,mobile_number,email,is_doctor,is_patient,is_hospital,date_of_birth,medical_system_number,gender,expertise,province) => dispatch(token_api.doctor_signup(first_name,last_name,username,password,mobile_number,email,is_doctor,is_patient,is_hospital,date_of_birth,medical_system_number,gender,expertise,province)),
    hospital_signup: (first_name,address,username,password,email,is_doctor,is_patient,is_hospital,phone_number,post_code,province) => dispatch(token_api.hospital_signup(first_name,address,username,password,email,is_doctor,is_patient,is_hospital,phone_number,post_code,province))
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, { withTheme: true })(FullWidthTabs));