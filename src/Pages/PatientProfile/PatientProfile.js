import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MenuAppBar from './NavBar'
import ViewInfo from "./AppointmentTimeInfo"
import ViewAndEditPatientInformation from "./PatientInfo"

  
let patient = {
  "url": "http://nedabackend.pythonanywhere.com/patients/0012356987/",
  "user": {
    "url": "http://nedabackend.pythonanywhere.com/users/3/",
    "username": "ali",
    "password": "pbkdf2_sha256$150000$cb62Qy8vGzJl$CFOx1RsLyXmwRptul4e8HK92LjtKsqeNebY3bq45VpI=",
    "first_name": "علی",
    "last_name": "عالی",
    "email": "ali@gmail.com",
    "province": ""
  },
  "social_number": "0012356987",
  "gender": "مرد",
  "mobile_number": "09368968789",
  "phone_number": "",
  "address": "",
  "date_of_birth": null,
  "picture": "http://nedabackend.pythonanywhere.com/Media/Profile%20Pictures/Patients/default.png",
}


export default class PatientProfile extends React.Component {

  constructor(props) {
    super(props);
    this. state = {
      clickOnClinic: false,
      Patient: '',
      ReservatiomTime: []
  
    };
  
  }

  componentWillMount() {
    return fetch('http://nedabackend.pythonanywhere.com/patients/0012356987/', {
      mode: "cors",
      method: 'GET',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(response => {
      return response.json()
    }).then(json => {
      console.log(json)
      this.setState({
        Patient: json
      });
    });
  }


 
  render() {

    return (
      <div>
        <MenuAppBar />
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper></Paper>
          </Grid>
          <Grid item sm={7} style={{ paddingTop: "2%", paddingLeft: "5%", paddingRight: "5%" }}>
            {this.state.Patient.patient_appointment_times ? (
              <div>
                {this.state.Patient.patient_appointment_times.map(appointment => <ViewInfo Appointment={appointment} />)}
              </div>
            ) : "loading ..."}
          </Grid>
          <Grid style={{ paddingRight: "4%" }} item sm={5}>
            <Paper elevation={5} style={{ 'marginTop': "3%", 'paddingRight': "4%", 'paddingLeft': "1%", opacity: "0.9" }}>
              <ViewAndEditPatientInformation patient={patient} />
            </Paper>
          </Grid>
        </Grid>
      </div>

    )
  }
}
