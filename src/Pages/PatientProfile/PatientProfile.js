import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MenuAppBar from './NavBar'
import ViewInfo from "./AppointmentTimeInfo"
import ViewAndEditPatientInformation from "./PatientInfo"

export default class PatientProfile extends React.Component {

  constructor(props) {
    super(props);
    this. state = {
      clickOnClinic: false,
      Patient: [],
      ReservatiomTime: []
  
    };
  
  }

  componentWillMount() {   

    return fetch('http://nedabackend.pythonanywhere.com/patients/', {
      mode: "cors",
      method: 'GET',
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization" : "Token " + localStorage.getItem('token')
      }
    })
    .then(response => {
      return response.json()
    }).then(json => {
      console.log(json)
      this.setState({
        Patient: json
      });
    });
  }


 
  render() {
    console.log(this.state.Patient)
    return (
      <div>
        <MenuAppBar />
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper></Paper>
          </Grid>
          <Grid item sm={7} style={{ paddingTop: "2%", paddingLeft: "5%", paddingRight: "5%" }}>
            {this.state.Patient.length >= 1  ? (
              <div>
                {this.state.Patient[0].patient_appointment_times.map(appointment => <ViewInfo Appointment={appointment} />)}
              </div>  
            ) : "loading ..."}
          </Grid>
          <Grid style={{ paddingRight: "4%" }} item sm={5}>
            <Paper elevation={5} style={{ 'marginTop': "3%", 'paddingRight': "4%", 'paddingLeft': "1%", opacity: "0.9" }}>
              {this.state.Patient.length >= 1
              ? <ViewAndEditPatientInformation patient={this.state.Patient[0]} />
              : null}
              
            </Paper>
          </Grid>
        </Grid>
      </div>

    )
  }
}
