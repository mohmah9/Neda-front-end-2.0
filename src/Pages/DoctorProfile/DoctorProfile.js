import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import 'react-day-picker/lib/style.css'
import Calender from './Calender';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import MenuAppBar from '../Home/NavBar'
import { connect } from "react-redux";
import Rate from '../Rate/Rate'
import Chat from '../Chat/Chat'
import Divider from '@material-ui/core/Divider';
import doctor_female from '../../Images/doctor_female.png';
import doctor_men from '../../Images/doctor_men.png'
import Map from '../Map/Map';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InsertInvitation from '@material-ui/icons/InsertInvitation';
import Place from '@material-ui/icons/Place';
import CircularProgress from '@material-ui/core/CircularProgress';

class DoctorProfile extends React.Component {

    state = {
        clickOnClinic: false,
        selectedClinic: [],
        clinics: [], 

    };

    handleclick = async (clinic) => {
        await this.setState({ selectedClinic: null, clickOnClinic: false })
        this.setState({ selectedClinic: clinic, clickOnClinic: true })

    }

    changestate = event => {
        this.setState({ clickOnClinic: true })
        this.setState({ selectedClinic: event.target.value })
    }

    render() {
        return (
            <div>
                <MenuAppBar />
                <Grid container spacing={24}>

                    <Grid item xs={12}>
                        <Paper></Paper>

                    </Grid>
                    <Grid item sm={5} style={{ paddingTop: "5%", paddingLeft: "5%", paddingRight: "5%" }}>
                        <Paper style={{ opacity: "0.9"}}>
                            {this.state.clickOnClinic ? <Calender clinic={this.state.selectedClinic} /> : null}
                        </Paper>
                    </Grid>
                    <Grid item sm={2} style={{ paddingTop: "5%", paddingRight: "5%" }}>
                        <Paper style={{ opacity: "0.9" }}>
                            <MenuList>
                                <p style={{ 'paddingRight': "5%", 'textAlign': "right" }}>مطب ها و بیمارستان ها</p>
                                {this.props.doctor.doctor_clinics.map(clinic =>
                                    <MenuItem style={{ 'paddingRight': "5%", 'textAlign': "right" }} value={clinic}
                                        onClick={() => this.handleclick(clinic)}>
                                        <p style={{ direction: 'rtl' }}>{clinic.name}</p>
                                        <br />
                                        <Divider/>
                                        <Divider />
                                    </MenuItem>)}
                            </MenuList>
                        </Paper>
                    </Grid>

                    <Grid style={{ paddingRight: "10%", paddingTop: "5%" }} item sm={5}>
                        <Paper elevation={5} style={{ 'paddingRight': "2%", 'paddingLeft': "1%", opacity: "0.9"}}>
                            <div>
                                <div>
                                    <div >
                                    {this.props.doctor.gender === "زن" ?
                                    <img src={doctor_female} style={{
                                        width: "120px",
                                        height: "120px", paddingTop: "2%", paddingLeft: "60%", overflow: "auto", clear: "both"
                                    }} alt=" " />
                                    : <img src={doctor_men} style={{
                                        width: "120px",
                                        height: "120px", paddingTop: "2%", paddingLeft: "60%", overflow: "auto", clear: "both"
                                    }} alt=" " />}
                                    </div>
                                </div>
                                
                                <div style={{ 'textAlign': "right", 'marginLeft': "30%" , paddingRight : "20%"}}>
                                    <div style={{ 'paddingTop': "2%" }}>
                                        <p>دکتر {this.props.doctor.user.first_name + " " + this.props.doctor.user.last_name}</p>
                                    </div>
                                    <div>
                                        <Rate Rate={this.props.doctor.rate} />
                                    </div>
                                    <Divider />
                                    <div style={{ 'paddingTop': "2%" }}>
                                        <p>درباره پزشک</p>
                                        <p style={{ color: "grey" }}>{this.props.doctor.bio}</p>
                                    </div>
                                    <Divider />
                                    <p style={{ 'paddingTop': "2%" }}>شماره نظام پزشکی  : {this.props.doctor.medical_system_number}</p>
                                    <Divider />
                                    <div style={{ 'paddingTop': "2%" }}>
                                        <p>تخصص و فوق تخصص</p>
                                        <p style={{ color: "grey" }}>{this.props.doctor.expertise}</p>
                                    </div>
                                    <Divider />
                                </div>
                        <ListItemIcon>
                        <Map/>
                        <Place />
                        </ListItemIcon>
                        </div>
                        </Paper>
                        <br />
                        <br/>
            

                        
                    </Grid>
            </Grid>
            <Chat />
            </div>

        )
    }
}
const mapStateToProps = state => ({
    ...state,
    doctor: state.Viewinfo_reducer.doctor_info,
});

export default connect(mapStateToProps)(DoctorProfile)



