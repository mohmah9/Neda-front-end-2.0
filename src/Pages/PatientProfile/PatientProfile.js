import React from 'react';
import { Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MenuAppBar from '../Home/NavBar'
import ViewInfo from "./AppointmentTimeInfo"
import ViewAndEditPatientInformation from "./PatientInfo"

export default class PatientProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            clickOnClinic: false,
            Patient: [],
            ReservatiomTime: [],
            info: false,
            reserve: false,
        };

    }

    componentWillMount() {

        return fetch('http://nedabackend.pythonanywhere.com/patients/', {
            mode: "cors",
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "Token " + localStorage.getItem('token')
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

    handleinfo = (e) => {
        this.setState({
            info: true,
            reserve: false,
        })
    }

    handlereserve = (e) => {
        this.setState({
            reserve: true,
            info: false
        })
    }


    render() {
        console.log(this.state.Patient)
        return (
            <div>
                <MenuAppBar />
        <div>
                    <Grid container spacing={24}>
                        <Grid item sm={9} style={{ paddingTop: "2%", paddingLeft: "5%", paddingRight: "5%" }}>
                            {this.state.reserve & this.state.Patient.length >= 1 ? (
                                <div>
                                    {this.state.Patient[0].patient_appointment_times.map(appointment => <ViewInfo Appointment={appointment} />)}
                                </div>
                            )
                                : this.state.info & this.state.Patient.length >= 1 ?
                                    <Paper elevation={5} style={{ 'marginTop': "3%", 'paddingRight': "4%", 'paddingLeft': "1%", opacity: "0.9" }}>
                                        <ViewAndEditPatientInformation patient={this.state.Patient[0]} />
                                    </Paper>
                                    : "welcome ...   "
                            }
                        </Grid>
                        <Grid item sm={3} style={{ paddingTop: "2%", paddingRight: "2%" }}>

                            <Button variant="outlined" fullWidth onClick={this.handleinfo} style={{ paddingBottom: "0", paddingTop: "0",marginBottom:"3%", borderRadius: '12%' }}>
                                <h4>مشخصات</h4>
                            </Button>
                            <Button variant="outlined" fullWidth onClick={this.handlereserve} style={{ paddingBottom: "0", paddingTop: "0", borderRadius: '12%' }}>
                                <h4>وقت های رزرو شده</h4>
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </div>

        )
    }
}
