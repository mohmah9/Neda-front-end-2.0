import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import { connect } from "react-redux";
import MedicalHistory from "./MedicHistory"
import * as patientProfile_api from "../../Redux/PatientProfile/PatientProfile_action";
import * as doctorPage_api from "../../Redux/DoctorPage/DoctorPage_action";
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import "./visit.css"
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Filters from "./Filters"
// import ViewInfo from "./Viewinfo"
// import { connect } from "react-redux";

class Appointment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            date: "",
            visiting:true,
            visited:true
        }
    }

    componentWillMount() {
        this.props.appointmenttimeClinic_load(this.props.Appointment.clinic)
        this.props.appointmenttimeDoctor_load(this.props.Appointment.patient)
        var today = new Date();
        if ((today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()).length === 9) {
            this.setState({ date: today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + "0" + today.getDate() })
        } else {
            this.setState({ date: today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() })
        }

    }
    handlehistory = () => {
        this.setState({
            open: true
        })
    }
    handlevisited=() =>{
        this.props.set_visited(this.props.Appointment.id)
        this.setState({visited:false})
    }
    handlevisiting=() =>{
        this.props.set_visiting(this.props.Appointment.id)
        this.setState({visiting:false})
    }

    render() {
        console.log(this.props.Appointment)
        // console.log(localStorage.getItem("clinic_name_"+this.props.Appointment.clinic))
        return (
            <div>
                <Paper style={{ boxShadow: "2px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", width: "-webkit-fill-available", background: "linear-gradient(to right,#90caf9, #1e88e5, #64b5f6)" }}>
                    <div>


                        <div style={{ 'textAlign': "right", 'marginLeft': "0%", paddingRight: "2%" }}>
                            <br />
                            <p>
                                {this.props.patient.user ?
                                    <div>
                                        <p> {localStorage.getItem("patient_fname_" + this.props.Appointment.patient)} {localStorage.getItem("patient_lname_" + this.props.Appointment.patient)}</p>
                                    </div>
                                    : null
                                }
                            </p>
                            <p>{this.props.Appointment.date_time.substring(0, 10)} : تاریخ </p>
                            <p>ساعت : {this.props.Appointment.date_time.substring(11, 16)}</p>
                            {this.props.Clinic ?
                                <div>
                                    <p> مطب : {localStorage.getItem("clinic_name_" + this.props.Appointment.clinic)}</p>
                                </div>
                                : null
                            }
                            {"2019-12-01" === this.props.Appointment.date_time.split("T")[0] ?
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
                        <div style={{marginLeft:"2%" , marginRight:"2%"}}>
                            <Grid container spacing={24}>
                                <Grid item sm={6}>
                                    <div>
                                        {this.state.visiting?<Button variant="contained" color="primary" style={{paddingTop:"2%",paddingBottom:"2%", background: "linear-gradient(to right, #780206 10%, #061161)" }} fullWidth onClick={this.handlevisiting}>
                                            در حال ویزیت</Button> 
                                            :this.state.visited ?<p style={{textAlign:"center" }}>
                                                شما در حال ویزیت این بیمار می باشید
                                            </p>:null}
                                    </div>
                                </Grid>
                                <Grid item sm={6}>
                                    <div>
                                        {this.state.visited? <Button variant="contained" color="primary" style={{paddingTop:"2%",paddingBottom:"2%", background: "linear-gradient(to right, #780206 10%, #061161)" }} fullWidth onClick={this.handlevisited}>
                                            اتمام ویزیت</Button> 
                                            : null}
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                        <br />
                        <Button variant="contained" color="primary" style={{ background: "linear-gradient(to right, #5c6bc0 , #001064)" }} fullWidth onClick={() => this.props.appointmenttimeDoctor_cancel(this.props.Appointment.url)}>
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
    appointmenttimeDoctor_cancel: (url) => dispatch(patientProfile_api.PatientProfile_cancel(url)),
    set_visiting: (url) => dispatch(doctorPage_api.set_visiting(url)),
    set_visited: (url) => dispatch(doctorPage_api.set_visited(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(Appointment)