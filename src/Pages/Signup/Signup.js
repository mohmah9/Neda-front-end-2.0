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
                {/* <div style={{ position: "absolute" }}>
                    <img src={nurse} style={{ width: "100%", height: "100%" }}></img>
                </div> */}
                <div className={classes.root} style={{ background: " linear-gradient(to top, #2980b9, #6dd5fa, #ffffff)" }}>
                    <AppBar position="static" color="default">
                        <Tabs
                            value={this.state.value}
                            onChange={this.handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            variant="fullWidth"
                            style={{ background: " linear-gradient(to bottom, #2980b9, #6dd5fa, #ffffff)" }}
                        >
                            <Tab label="بیمار" />
                            <Tab label="پزشک" />
                            <Tab label="بیمارستان" />
                        </Tabs>
                    </AppBar>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={this.state.value}
                        onChangeIndex={this.handleChangeIndex}
                    >
                        <TabContainer dir={theme.direction} ><h1 ><center>بیمار</center></h1>
                            <div className="fields">
                                <TextField id="outlined-email-input" required onChange={this.handleChanger.bind(this)} fullWidth className="usertext" label="نام" type="Name" name="first_name" margin="normal" />
                            </div>
                            <div className="fields">
                                <TextField id="outlined-password-input" required onChange={this.handleChanger.bind(this)} fullWidth className="passtext" label="نام خوانوادگی" name="last_name" type="Name" margin="normal" />
                            </div>
                            <div className="fields">
                                <TextField id="outlined-email-input" required onChange={this.handleChanger.bind(this)} fullWidth className="usertext" label="نام کاربری" type="Name" name="username" margin="normal" />
                            </div>
                            <div className="fields">
                                <TextField id="outlined-email-input" required onChange={this.handleChanger.bind(this)} fullWidth className="usertext" label="ایمیل" type="eamil" name="email" autoComplete="email" margin="normal" />
                            </div>
                            <div className="fields">
                                <TextField id="outlined-password-input" required onChange={this.handleChanger.bind(this)} fullWidth className="passtext" label="رمز عبور" name="password" type="password" margin="normal" />
                            </div>
                            <div className="fields">
                                <TextField id="outlined-email-input" required onChange={this.handleChanger.bind(this)} fullWidth className="usertext" label="شماره ملی" type="text" name="social_number" margin="normal" />
                            </div>
                            <div className="fields">
                                <TextField id="outlined-password-input" required onChange={this.handleChanger.bind(this)} fullWidth className="passtext" label="شماره تلفن همراه" type="tel" name="mobile_number" margin="normal" />
                            </div>
                            <div style={{ paddingLeft: "15%" }}>
                                <FormControl component="fieldset" className={classes.formControl}>
                                    <FormLabel component="legend">جنسیت</FormLabel>
                                    <RadioGroup
                                        aria-label="Gender"
                                        name="gender"
                                        className={classes.group}
                                        value={this.state.value}
                                        onChange={this.handleChangerr}
                                    >
                                        <FormControlLabel value="female" control={<Radio />} label="زن" />
                                        <FormControlLabel value="male" control={<Radio />} label="مرد" />
                                    </RadioGroup>
                                </FormControl>
                            </div>
                            <div><p style={{ color: "red" }}>{this.state.correct === false ? "There is something wrong with the information you provided" : ""}</p></div>
                            <div className='btn-submit'>
                                <Button onClick={() => this.props.patient_signup(this.state.first_name,this.state.last_name,this.state.username,this.state.password,this.state.mobile_number,this.state.email,false,true,false,this.state.social_number,this.state.gender)} variant="contained" color="primary" fullWidth>
                                    ثبت نام
                    </Button>
                            </div>
                        </TabContainer>
                        <TabContainer dir={theme.direction}><h1 ><center>پزشک</center></h1>
                            <div className="fields">
                                <TextField id="outlined-email-input" required onChange={this.handleChanger.bind(this)} fullWidth className="usertext" label="نام" type="Name" name="first_name" margin="normal" />
                            </div>
                            <div className="fields">
                                <TextField id="outlined-password-input" required onChange={this.handleChanger.bind(this)} fullWidth className="passtext" label="نام خوانوادگی" name="last_name" type="Name" margin="normal" />
                            </div>
                            <div className="fields">
                                <TextField id="outlined-email-input" required onChange={this.handleChanger.bind(this)} fullWidth className="usertext" label="نام کاربری" type="Name" name="username" margin="normal" />
                            </div>
                            <div className="fields">
                                <TextField id="outlined-email-input" required onChange={this.handleChanger.bind(this)} fullWidth className="usertext" label="ایمیل" type="Name" name="email" autoComplete="email" margin="normal" />
                            </div>
                            <div className="fields">
                                <TextField id="outlined-password-input" required onChange={this.handleChanger.bind(this)} fullWidth className="passtext" label="رمز عبور" type="password" name="password" margin="normal" />
                            </div>
                            <div className="fields">
                                <TextField id="outlined-email-input" required onChange={this.handleChanger.bind(this)} fullWidth className="usertext" label="شماره نظام پزشکی" type="text " name="medical_system_number" margin="normal" />
                            </div>
                            <div className="fields">
                                <TextField id="outlined-password-input" required onChange={this.handleChanger.bind(this)} fullWidth className="passtext" label="شماره تلفن همراه" name="mobile_number" type="tel" margin="normal" />
                            </div >
                            <div className="fields">
                                <TextField id="outlined-password-input" required onChange={this.handleChanger.bind(this)} fullWidth className="passtext" label="تخصص" name="expertise" type="text" margin="normal" />
                            </div >
                            <div className="fields">
                                <TextField id="outlined-password-input" required onChange={this.handleChanger.bind(this)} fullWidth className="passtext" label="استان" name="province" type="text" margin="normal" />
                            </div>
                            <div style={{ paddingLeft: "15%" }}>
                                <FormControl component="fieldset" className={classes.formControl}>
                                    <FormLabel component="legend">جنسیت</FormLabel>
                                    <RadioGroup
                                        aria-label="Gender"
                                        name="gender"
                                        className={classes.group}
                                        value={this.state.value}
                                        onChange={this.handleChangerr}
                                    >
                                        <FormControlLabel value="female" control={<Radio />} label="زن" />
                                        <FormControlLabel value="male" control={<Radio />} label="مرد" />
                                    </RadioGroup>
                                </FormControl>
                            </div>
                            <div><p style={{ color: "red" }}>{this.state.correct === false ? "There is something wrong with the information you provided" : ""}</p></div>
                            <div className='btn-submit'>
                                <Button variant="contained" onClick={() => this.props.doctor_signup(this.state.first_name,this.state.last_name,this.state.username,this.state.password,this.state.mobile_number,this.state.email,true,false,false,this.state.date_of_birth,this.state.medical_system_number,this.state.gender,this.state.expertise,this.state.province)} color="primary" fullWidth>
                                    ثبت نام
                    </Button>
                            </div>
                        </TabContainer>
                        <TabContainer dir={theme.direction}><h1 ><center>بیمارستان</center></h1>
                            <div className="fields">
                                <TextField id="outlined-email-input" required onChange={this.handleChanger.bind(this)} fullWidth className="usertext" label="نام" type="Name" name="first_name" margin="normal" />
                            </div>
                            <div className="fields">
                                <TextField id="outlined-password-input" required onChange={this.handleChanger.bind(this)} fullWidth className="passtext" label="آدرس" type="text" name="address" margin="normal" />
                            </div>
                            <div className="fields">
                                <TextField id="outlined-email-input" required onChange={this.handleChanger.bind(this)} fullWidth className="usertext" label="نام کاربری" type="Name" name="username" margin="normal" />
                            </div>
                            <div className="fields">
                                <TextField id="outlined-email-input" required onChange={this.handleChanger.bind(this)} fullWidth className="usertext" label="ایمیل" type="Name" name="email" autoComplete="email" margin="normal" />
                            </div>
                            <div className="fields">
                                <TextField id="outlined-password-input" required onChange={this.handleChanger.bind(this)} fullWidth className="passtext" label="رمز عبور" name="password" type="password" margin="normal" />
                            </div>
                            <div className="fields">
                                <TextField id="outlined-email-input" required onChange={this.handleChanger.bind(this)} fullWidth className="usertext" label="کد پستی" type="test" name="post_code" margin="normal" />
                            </div>
                            <div className="fields">
                                <TextField id="outlined-password-input" required onChange={this.handleChanger.bind(this)} fullWidth className="passtext" label="استان" name="province" type="text" margin="normal" />
                            </div>
                            <div className="fields">
                                <TextField id="outlined-password-input" required onChange={this.handleChanger.bind(this)} fullWidth className="passtext" label="شماره تلفن" name="phone_number" type="text" margin="normal" />
                            </div>
                            <div><p style={{ color: "red" }}>{this.state.correct === false ? "There is something wrong with the information you provided" : ""}</p></div>
                            <div className='btn-submit'>
                                <Button variant="contained" onClick={() => this.props.hospital_signup(this.state.first_name,this.state.address,this.state.username,this.state.password,this.state.email,false,false,true,this.state.phone_number,this.state.post_code,this.state.province)} color="primary" fullWidth>
                                    ثبت نام
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