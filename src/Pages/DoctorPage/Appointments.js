import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import { connect } from "react-redux";
import MedicalHistory from "./MedicHistory"
import * as patientProfile_api from "../../Redux/PatientProfile/PatientProfile_action";
import * as doctorPage_api from "../../Redux/DoctorPage/DoctorPage_action";

class Appointment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            date: ""
        }
    }

    componentWillMount() {
        this.props.appointmenttimeClinic_load('http://172.17.3.103:8000/clinics/' + this.props.Appointment.clinic + '/')
        this.props.appointmenttimeDoctor_load(this.props.Appointment.patient )
        var today = new Date();
        if ((today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()).length === 9) {
            this.setState({ date: today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + "0" + today.getDate() })
        }else{
            this.setState({ date: today.getFullYear() + '-' + (today.getMonth() + 1) + '-' +  today.getDate() })
        }

    }
    handlehistory = () => {
        this.setState({
            open: true
        })
    }

    render() {
        console.log(this.props.Appointment)
        return (
            <div>
                <Paper style={{ boxShadow: "2px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", width: "-webkit-fill-available"  , background : "linear-gradient(to right,#90caf9, #1e88e5, #64b5f6)" }}>
                    <div>


                        <div style={{ 'textAlign': "right", 'marginLeft': "0%", paddingRight: "2%" }}>
                            <br />
                            <p>
                                {this.props.patient.user ?
                                    <div>
                                        <p> {localStorage.getItem("patient_fname_"+this.props.Appointment.patient)} {localStorage.getItem("patient_lname_"+this.props.Appointment.patient)}</p>
                                    </div>
                                    : null
                                }
                            </p>
                            <p>{this.props.Appointment.date_time.substring(0, 10)} : تاریخ </p>
                            <p>ساعت : {this.props.Appointment.date_time.substring(11, 16)}</p>
                            {this.props.Clinic ?
                                <div>
                                    <p> مطب : {localStorage.getItem("clinic_name_"+this.props.Appointment.clinic)}</p>
                                </div>
                                : null
                            }
                            {this.state.date === this.props.Appointment.date_time.split("T")[0] ?
                                !this.state.open ? <div>
                                    <Button variant="contained" onClick={this.handlehistory} style={{ background: "linear-gradient(60deg, #2196f3 30%, #21cbf3 90%)" }}  >
                                        مشاهده و تغییر سوابق پزشکی</Button>
                                </div> : <MedicalHistory Appointment={this.props.Appointment} />
                                : <div>
                                    سوابق پزشکی
                                    <br />
                                </div>
                            }
                            <br />
                        </div>
                        <Button variant="contained" color="primary" style = {{background : "linear-gradient(to right, #5c6bc0 , #001064)"}} fullWidth onClick={() => this.props.appointmenttimeDoctor_cancel(this.props.Appointment.url)}>
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
    patient: state.PatientProfile_reducer.appointmentDoctor_result,
    Clinic: state.PatientProfile_reducer.appointmentClinic_result

});

const mapDispatchToProps = dispatch => ({
    appointmenttimeClinic_load: (url) => dispatch(doctorPage_api.appointmenttimeClinic_load(url)),
    appointmenttimeDoctor_load: (url) => dispatch(doctorPage_api.appointmenttimeDoctor_load(url)),
    appointmenttimeDoctor_cancel: (url) => dispatch(patientProfile_api.PatientProfile_cancel(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(Appointment)