import React from 'react';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Province from '../PatientProfile/Province'
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import { connect } from "react-redux";
import * as doctorPage_api from "../../Redux/DoctorPage/DoctorPage_action";

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


class ViewAndEditDoctorInformation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: this.props.doctor.user.first_name,
            last_name: this.props.doctor.user.last_name,
            username: this.props.doctor.user.username,
            password: this.props.doctor.user.password,
            mobile_number: this.props.doctor.mobile_number,
            province: this.props.doctor.user.province,
            email: this.props.doctor.user.email,

            social_number: this.props.doctor.social_number,
            gender: this.props.doctor.gender,
            phone_number: this.props.doctor.phone_number,
            address: this.props.doctor.address,
            date_of_birth: "1360-01-14",
            medical_system_number: this.props.doctor.medical_system_number

        }
    }
    
    componentWillMount() {
        this.props.doctorPage_load()
    }


    handleChanger(e) {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleChangerr = event => {
        this.selectedFilters = event.target.value
        this.setState({ province: event.target.value })
        console.log(this.selectedFilters)

    }

    // handleEditdoctor = e => {
    //     fetch('http://nedabackend.pythonanywhere.com/doctors/'+this.props.doctor.medical_system_number +'/', {
    //         mode: "cors",
    //         method: 'PUT',
    //         body: JSON.stringify({
    //             user: {
    //                 first_name: this.state.first_name,
    //                 last_name: this.state.last_name,
    //                 username: this.state.username,
    //                 password: this.state.password,
    //                 province: this.state.province,
    //                 email: this.state.email,
    //             },
    //             expertise:this.props.doctor.expertise,
    //             medical_system_number:this.props.doctor.medical_system_number,
    //             mobile_number: this.state.mobile_number,
    //             social_number: this.state.social_number,
    //             phone_number: this.state.phone_number,
    //             bio : this.props.doctor.bio,
    //             address: this.state.address,
    //             date_of_birth: "1360-01-14",
    //             gender: this.state.gender,
    //         }),
    //         headers: {
    //             "Content-type": "application/json; charset=UTF-8",
    //             "Authorization": "Token " + localStorage.getItem('token')
    //         }
    //     }).then(response => {
    //         return response.json()
    //     }).then(json => {
    //         console.log(json)
    //     });

    // };

    render() {
        console.log(this.props.doctor.url)
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
                            {Province.map(p => (<MenuItem name={p.value} value={p.value} onclick={this.handleChanger.bind(this)}>{p.value}</MenuItem>))}

                        </Select>
                    </FormControl>
                </div>


                <br />
                <div className="fields">
                    <Button variant="contained" onClick={() => this.props.doctorPage_Edit(this.state.first_name, this.state.last_name, this.state.username, this.state.password, this.state.mobile_number, this.state.email, this.state.medical_system_number, this.state.gender, this.state.province, this.state.social_number, this.state.phone_number, this.state.address, this.props.doctor.expertise, this.props.doctor.bio, this.props.doctor.url) } color="primary" fullWidth>
                        Edit
                   </Button>
                </div>
                <br />

            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state,
    doctor: state.DoctorPage_reducer.doctorPage_load_result[0]
});

const mapDispatchToProps = dispatch => ({

    doctorPage_load: () => dispatch(doctorPage_api.doctorPage_load()),
    doctorPage_Edit: (first_name, last_name, username, password, mobile_number, email, medical_system_number, gender, province, social_number, phone_number, address, expertise, bio, url) => dispatch(doctorPage_api.doctorPage_Edit(first_name, last_name, username, password, mobile_number, email, medical_system_number, gender, province, social_number, phone_number, address, expertise, bio, url))
});

export default connect(mapStateToProps,mapDispatchToProps)(ViewAndEditDoctorInformation)
