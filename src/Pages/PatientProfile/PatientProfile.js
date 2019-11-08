import React from 'react';
import { Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MenuAppBar from '../Home/NavBar';
import ViewInfo from "./AppointmentTimeInfo";
import Medicalhistory from "./MedicHistory";
import ViewAndEditPatientInformation from "./PatientInfo";
import { connect } from "react-redux";
import * as patientProfile_api from "../../Redux/PatientProfile/PatientProfile_action";

class PatientProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            clickOnClinic: false,
            hsitory: false,
            info: false,
            reserve: true,
        };

    }

    componentWillMount() {
        this.props.PatientProfile_load()

    }

    handlehistory = (e) => {
        this.setState({
            info: false,
            reserve: false,
            hsitory:true,
        })
    }
    handleinfo = (e) => {
        this.setState({
            info: true,
            reserve: false,
            hsitory:false
        })
    }

    handlereserve = (e) => {
        this.setState({
            reserve: true,
            info: false,
            hsitory:false
        })
    }


    render() {
        return (
            <div>
                <MenuAppBar />
                <div>
                    <Grid container spacing={24}>
                        <Grid item sm={9} style={{ paddingTop: "2%", paddingLeft: "5%", paddingRight: "5%" }}>
                            {this.state.reserve ? (
                                <div>
                                    {typeof (this.props.Patient[0]) != "undefined" ?
                                        <div>
                                            {this.props.Patient[0].patient_appointment_times.map(appointment => <ViewInfo Appointment={appointment} />)}
                                        </div>
                                        : console.log("khodeti")}
                                </div>
                            )
                                : this.state.info ?
                                    <Paper elevation={5} style={{ 'marginTop': "3%", 'paddingRight': "4%", 'paddingLeft': "1%", opacity: "0.9" ,  background: "linear-gradient(to top, #8e9eab, #eef2f3)"}}>
                                        <ViewAndEditPatientInformation />
                                    </Paper>
                                    : this.state.hsitory ? (
                                        <div>
                                            {typeof (this.props.Patient[0]) != "undefined" ?
                                                <div>
                                                    <Medicalhistory />
                                                </div>
                                                : console.log("khodeti")}
                                        </div>
                                    ) :
                                        "welcome ...   "
                            }
                        </Grid>
                        <Grid item sm={3} style={{ paddingTop: "2%", paddingRight: "2%" }}>

                            <Button variant="outlined" fullWidth onClick={this.handleinfo} style={{ paddingBottom: "0", paddingTop: "0", marginBottom: "3%", borderRadius: '12%' , background: "linear-gradient(to right, #9cecfb, #6C9CE9, #9cecfb)" }}>
                                <h4>مشخصات</h4>
                            </Button>
                            <Button variant="outlined" fullWidth onClick={this.handlereserve} style={{ paddingBottom: "0", paddingTop: "0", borderRadius: '12%', marginBottom: "3%" , background: "linear-gradient(to right, #9cecfb, #6C9CE9, #9cecfb)" }}>
                                <h4>وقت های رزرو شده</h4>
                            </Button>
                            <Button variant="outlined" fullWidth onClick={this.handlehistory} style={{ paddingBottom: "0", paddingTop: "0", borderRadius: '12%' , marginBottom: "3%" , background: "linear-gradient(to right, #9cecfb, #6C9CE9, #9cecfb)" }}>
                                <h4>سوابق پزشکی</h4>
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    ...state,
    Patient: state.PatientProfile_reducer.patientProfile_load_result
});

const mapDispatchToProps = dispatch => ({
    PatientProfile_load: () => dispatch(patientProfile_api.PatientProfile_load())
});

export default connect(mapStateToProps, mapDispatchToProps)(PatientProfile)
