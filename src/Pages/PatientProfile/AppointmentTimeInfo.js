import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import AddRate from '../Rate/AddRate'
import Rate from '../Rate/Rate';
import { connect } from "react-redux";
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
    return (
      
      <div>
          <Paper style={{ boxShadow: "2px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", width: "-webkit-fill-available" }}>
            <div>
              <div>

                <img src={this.props.Doctor.picture} style={{
                  width: "75px",
                  height: "75px", position: "absolute", left: "5%", paddingTop: "2%"
                }} alt=" " />
              </div>
              <div style={{ 'textAlign': "right", 'marginLeft': "30%", paddingRight: "2%" }}>
                <br />
                {this.props.Doctor.user ?
                  <p>دکتر {this.props.Doctor.user.first_name + " " + this.props.Doctor.user.last_name}</p>
                  : "Loading ..."}
                <p>تخصص و فوق تخصص :  {this.props.Doctor.expertise}</p>
                <p>{this.props.Appointment.date_time.substring(0, 10)} : تاریخ </p>
                <p>ساعت : {this.props.Appointment.date_time.substring(11, 16)}</p>
                {this.props.Clinic ?
                  <div>
                    <p>آدرس مطب : {this.props.Clinic.address}</p>
                    <p>تلفن : {this.props.Clinic.phone_number}</p>
                  </div>
                : "loading"
                }
                <AddRate  Doctor = {this.props.Doctor}/>
              </div>
            </div>
          </Paper>
          
        <Button variant="contained" fullWidth color="primary" onClick={() => this.props.PatientProfile_cancel(this.props.Appointment.url)}>
          کنسل
        </Button>
        <br/>
        <br />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state,
  Doctor :state.PatientProfile_reducer.appointmentDoctor_result,
  Clinic :state.PatientProfile_reducer.appointmentClinic_result
});

const mapDispatchToProps = dispatch => ({
  appointmenttimeClinic_load : (url) => dispatch(patientProfile_api.appointmenttimeClinic_load(url)),
  appointmenttimeDoctor_load : (url) => dispatch(patientProfile_api.appointmenttimeDoctor_load(url)),
  PatientProfile_cancel: (url) => dispatch(patientProfile_api.PatientProfile_cancel(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewInfo)