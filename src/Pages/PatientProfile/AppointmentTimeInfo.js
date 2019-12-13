import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import AddRate from '../Rate/AddRate'
import Divider from '@material-ui/core/Divider';
import Fade from 'react-reveal/Fade';
import { connect } from "react-redux";
import CircularProgress from '@material-ui/core/CircularProgress';
import * as patientProfile_api from "../../Redux/PatientProfile/PatientProfile_action";



class ViewInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Doctor: '',
      Clinic: '',
    }
  }

  componentWillMount() {
    this.props.appointmenttimeClinic_load(this.props.Appointment.clinic)
    this.props.appointmenttimeDoctor_load(this.props.Appointment.doctor)
  }

  render() {
    localStorage.getItem("patient_fname_" + this.props.Appointment.doctor)

    return (

      <div>
        <Fade left>
          <Paper style={{ boxShadow: "2px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", width: "-webkit-fill-available" }}>
            <div>
              <div>

                <img src={this.props.Doctor.picture} style={{
                  width: "75px",
                  height: "75px", paddingTop: "2%", float: "right", paddingRight: "2%", overflow: "auto", clear: "both"
                }} alt=" " />
              </div>
              <div style={{ 'textAlign': "right", paddingTop: "2%", 'marginLeft': "30%", paddingRight: "15%" }}>
                {this.props.Doctor.user ?
                  <h2>دکتر {localStorage.getItem("doctor_fname_" + this.props.Appointment.doctor) + " " + localStorage.getItem("doctor_lname_" + this.props.Appointment.doctor)}</h2>
                  : <CircularProgress variant="determinate" color="primary" />}
                <p>متخصص :  {this.props.Doctor.expertise}</p>
                <Divider />
                <p>{this.props.Appointment.date_time.substring(0, 10)} : تاریخ </p>
                <p>ساعت : {this.props.Appointment.date_time.substring(11, 16)}</p>
                <Divider />
                {this.props.Clinic ?
                  <div>
                    <p>آدرس مطب : {localStorage.getItem("clinic_name_" + this.props.Appointment.clinic)}</p>
                    <p>تلفن : {localStorage.getItem("clinic_phonnumber_" + this.props.Appointment.clinic)}</p>
                  </div>
                  : <CircularProgress variant="determinate" color="primary" />
                }
                <AddRate Doctor={this.props.Doctor} />
              </div>
            </div>

            <Button variant="outlined" style={{ 'marginLeft': "15%", marginTop: "1%", marginBottom: "1%" }} color="secondary" onClick={() => this.props.PatientProfile_cancel(this.props.Appointment.url)}>
              لغو نوبت
            </Button>
            <br />
          </Paper>
        </Fade>
        <br />
        <br />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state,
  Doctor: state.PatientProfile_reducer.appointmentDoctor_result,
  Clinic: state.PatientProfile_reducer.appointmentClinic_result
});

const mapDispatchToProps = dispatch => ({
  appointmenttimeClinic_load: (url) => dispatch(patientProfile_api.appointmenttimeClinic_load(url)),
  appointmenttimeDoctor_load: (url) => dispatch(patientProfile_api.appointmenttimeDoctor_load(url)),
  PatientProfile_cancel: (url) => dispatch(patientProfile_api.PatientProfile_cancel(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewInfo)
