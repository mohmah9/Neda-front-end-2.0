import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MenuAppBar from '../Home/NavBar';
import ViewInfo from "./AppointmentTimeInfo";
import Medicalhistory from "./MedicHistory";
import ViewAndEditPatientInformation from "./PatientInfo";
import { connect } from "react-redux";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Person from '@material-ui/icons/Person';
import InsertInvitation from '@material-ui/icons/InsertInvitation';
import Assignment from '@material-ui/icons/Assignment';
import Forward from '@material-ui/icons/Forward';
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
                        <Grid item sm={9} style={{ paddingTop: "4%", paddingLeft: "15%", paddingRight: "5%" , marginTop : "4%"}}>
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
                                    <Paper elevation={5} style={{'paddingRight': "4%", 'paddingLeft': "1%", opacity: "0.9" }}>
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
                        
                        <Grid item sm={3} style={{ paddingTop: "5%", paddingRight: "10%", marginTop : "3%" }}>
                            <div>
                            <Paper>
                            <div>
                            <List onClick={this.handleinfo}>
                                <ListItem button>
                                <ListItemText primary="اطلاعات کاربری" style = {{'textAlign' : "right"}}/>
                                <ListItemIcon>
                                    <Person />
                                </ListItemIcon>
                                </ListItem>
                            </List>
                            <Divider />
                            <List onClick={this.handlereserve}>
                                <ListItem button>
                                <ListItemText primary="نوبت های من" style = {{'textAlign' : "right"}}/>
                                <ListItemIcon>
                                <InsertInvitation />
                                </ListItemIcon>
                                </ListItem>
                            </List>
                            <Divider />
                            <List onClick={this.handlehistory}>
                                <ListItem button>
                                <ListItemText primary="سوابق پزشکی" style = {{'textAlign' : "right"}}/>
                                <ListItemIcon>
                                <Assignment />
                                </ListItemIcon>    
                                </ListItem>
                            </List>
                            <Divider />
                            <List> 
                                <ListItem button>
                                <ListItemText primary="خروج" style = {{'textAlign' : "right"}}/>
                                <ListItemIcon>
                                <Forward />
                                </ListItemIcon>    
                                </ListItem>
                            </List>
                            </div>
                            </Paper>
                            </div>
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
