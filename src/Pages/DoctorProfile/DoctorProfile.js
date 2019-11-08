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

class DoctorProfile extends React.Component {

    state = {
        clickOnClinic: false,
        selectedClinic: [],
        clinics: []

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
                    <Grid item sm={5} style={{ paddingTop: "2%", paddingLeft: "5%", paddingRight: "5%" }}>
                        <Paper style={{ opacity: "0.9" ,  background: "linear-gradient(to bottom, #83a4d4, #b6fbff)"}}>
                            {this.state.clickOnClinic ? <Calender clinic={this.state.selectedClinic} /> : null}
                        </Paper>
                    </Grid>
                    <Grid item sm={2} style={{ paddingTop: "2%", paddingRight: "5%" }}>
                        <Paper style={{ opacity: "0.9" , background:" linear-gradient(to left, #1c92d2, #f2fcfe)"}}>
                            <MenuList>
                                <p style={{ 'paddingRight': "5%", 'textAlign': "right" }}>مطب ها و بیمارستان ها</p>
                                {this.props.doctor.doctor_clinics.map(clinic =>
                                    <MenuItem style={{ 'paddingRight': "5%", 'textAlign': "right" }} value={clinic}
                                        onClick={() => this.handleclick(clinic)}>
                                        <p style={{ direction: 'rtl' }}>{clinic.name}</p>
                                        <br />
                                    </MenuItem>)}
                            </MenuList>
                        </Paper>
                    </Grid>

                    <Grid style={{ paddingRight: "4%" }} item sm={5}>
                        <Paper elevation={5} style={{ 'paddingRight': "4%", 'paddingLeft': "1%", opacity: "0.9" , background: "linear-gradient(to right,#90caf9, #1e88e5, #64b5f6)" }}>
                           <div>
                           <div>
                                <div style={{ 'marginTop': "3%", 'marginRight': "15%" }}>
                                    <img src={this.props.doctor.picture}
                                        alt={this.props.doctor.user.first_name + " " + this.props.doctor.user.last_name}
                                        style=
                                        {{
                                            'alignSelf': "right",
                                            'marginLeft': "90%",
                                            width: "135px",
                                            height: "135px",
                                            'borderRadius': "50%",

                                        }} />
                                    </div>
                               </div>
                                <div style={{ 'textAlign': "right", 'marginLeft': "30%" }}>
                                    <div style={{ 'paddingTop': "2%" }}>
                                        <p>دکتر {this.props.doctor.user.first_name + " " + this.props.doctor.user.last_name}</p>
                                    </div>
                                    <div>
                                         <Rate Rate={this.props.doctor.rate} /> :
                                    </div>
                                    <div style={{ 'paddingTop': "2%" }}>
                                        <p>درباره پزشک</p>
                                        <p style={{ color: "grey" }}>{this.props.doctor.bio}</p>
                                    </div>
                                    <p style={{ 'paddingTop': "2%" }}>شماره نظام پزشکی  {this.props.doctor.medical_system_number}</p>
                                    <div style={{ 'paddingTop': "2%" }}>
                                        <p>تخصص و فوق تخصص</p>
                                        <p style={{ color: "grey" }}>{this.props.doctor.expertise}</p>
                                    </div>
                                </div>
                           </div>
                            <br />

                        </Paper>
                    </Grid>
                </Grid>
            </div>

        )
    }
}
const mapStateToProps = state => ({
    ...state,
    doctor: state.Viewinfo_reducer.doctor_info,

});

export default connect(mapStateToProps)(DoctorProfile)



