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
import  Dialogfalse from './Diologfalse';
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


class Addclinic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            doctors: [],
            filters: [],
            timeresult: [],
            clinicname: "",
            clinic_phone_number: "",
            clinicaddress: "",
            clinicprovince: "",
            open : false

        }
    }

    handleChanger(e) {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleChangerr = event => {
        this.setState({ clinicprovince: event.target.value })
    }
    render() {
        console.log(this.state.clinicprovince)
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
                <br />
                <Button variant="contained" onClick={() => this.props.doctorPage_addClinic(this.state.clinicname, this.state.clinicprovince, this.state.clinic_phone_number, this.state.clinicaddress, this.props.doctor.medical_system_number)} color="primary" fullWidth>
                    Add clinic
                 </Button>

                 {this.state.open ? <Dialogfalse /> : null}
            </div>
        )
    }

}

const mapStateToProps = state => ({
    ...state,
	data: state.DoctorPage_reducer.doctorPage_load_result[0].doctor_clinics,
    doctor: state.DoctorPage_reducer.doctorPage_load_result
});

const mapDispatchToProps = dispatch => ({
    doctorPage_addClinic: (clinicname, clinicprovince, clinic_phone_number, clinicaddress, medical_system_number) => dispatch(doctorPage_api.doctorPage_addClinic(clinicname, clinicprovince, clinic_phone_number, clinicaddress, medical_system_number))
});

export default connect(mapStateToProps, mapDispatchToProps)(Addclinic)