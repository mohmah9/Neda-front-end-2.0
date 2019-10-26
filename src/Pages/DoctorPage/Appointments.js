import React from 'react';
import Paper from '@material-ui/core/Paper';

import { Button } from '@material-ui/core';
import { connect } from "react-redux";
import * as patientProfile_api from "../../Redux/PatientProfile/PatientProfile_action";
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

class Appointment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            patient: '',
            Clinic: '',
            open : false
        }
    }

    componentWillMount() {
        this.props.appointmenttimeClinic_load('http://172.17.3.103:8000/clinics/' + this.props.Appointment.clinic + '/')
        this.props.appointmenttimeDoctor_load('http://172.17.3.103:8000/patients/' + this.props.Appointment.patient + '/')
    }

    render() {
        return (
            <div>

                <Paper style={{ boxShadow: "2px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", width: "-webkit-fill-available" }}>
                    <div>


                        <div style={{ 'textAlign': "right", 'marginLeft': "0%", paddingRight: "2%" }}>
                            <br />
                            <p>
                                {this.props.patient.user ?
                                    <div>
                                        <p> {this.props.patient.user.first_name} {this.props.patient.user.last_name}</p>
                                    </div>
                                    : null
                                }
                            </p>
                            <p>{this.props.Appointment.date_time.substring(0, 10)} : تاریخ </p>
                            <p>ساعت : {this.props.Appointment.date_time.substring(11, 16)}</p>
                            {this.state.Clinic ?
                                <div>
                                    <p> مطب : {this.props.Clinic.name}</p>
                                </div>
                                : null
                            }


                            <br />
                        </div>
                        <Button variant="contained" color="primary" fullWidth onClick={() => this.props.PatientProfile_cancel(this.props.Appointment.url)}>
                            کنسل</Button>
                    </div>
                    </Paper>
                

                <br />
            </div>

        )
    }

}
const mapStateToProps = state => ({
    ...state,
    patient :state.PatientProfile_reducer.appointmentDoctor_result,
    Clinic :state.PatientProfile_reducer.appointmentClinic_result
    
  });
  
  const mapDispatchToProps = dispatch => ({
    appointmenttimeClinic_load : (url) => dispatch(patientProfile_api.appointmenttimeClinic_load(url)),
    appointmenttimeDoctor_load : (url) => dispatch(patientProfile_api.appointmenttimeDoctor_load(url)),
    PatientProfile_cancel: (url) => dispatch(patientProfile_api.PatientProfile_cancel(url))
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Appointment)