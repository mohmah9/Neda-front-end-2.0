import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button, Icon } from '@material-ui/core';
import 'react-day-picker/lib/style.css'
import Calender from './Calender';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import MenuAppBar from './NavBar'
import { connect } from 'net';

function Image(props) {

    return (
        <div>
            <div style={{ 'marginTop': "3%", 'marginRight': "15%" }}>
                <img src={JSON.parse(localStorage.getItem("selecteddoctor")).picture}
                    alt={JSON.parse(localStorage.getItem("selecteddoctor")).first_name + " " + JSON.parse(localStorage.getItem("selecteddoctor")).last_name}
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
    );
}

function Information(props) {

    return (
        <div style={{ 'textAlign': "right", 'marginLeft': "30%" }}>
            <div style={{ 'paddingTop': "2%" }}>
                <p>دکتر {JSON.parse(localStorage.getItem("selecteddoctor")).user.first_name + " " + JSON.parse(localStorage.getItem("selecteddoctor")).user.last_name}</p>
            </div>
            <div style={{ 'paddingTop': "2%" }}>
                <p>درباره پزشک</p>
                <p style={{ color: "grey" }}>{JSON.parse(localStorage.getItem("selecteddoctor")).bio}</p>
            </div>
            <p style={{ 'paddingTop': "2%" }}>شماره نظام پزشکی  {JSON.parse(localStorage.getItem("selecteddoctor")).medical_system_number}</p>
            <div style={{ 'paddingTop': "2%" }}>
                <p>تخصص و فوق تخصص</p>
                <p style={{ color: "grey" }}>{JSON.parse(localStorage.getItem("selecteddoctor")).expertise}</p>
            </div>
        </div>
    );

}


export default class DoctorProfile extends React.Component {

    constructor(props) {
        super(props);

    }



    componentWillMount() {
        if (typeof(this.props.location.data)!="undefined"){
        localStorage.setItem("selecteddoctor", JSON.stringify(this.props.location.data.Doctor))}
        console.log(JSON.parse(localStorage.getItem("selecteddoctor")))
        return fetch('http://nedabackend.pythonanywhere.com/clinics/?doctor=' + JSON.parse(localStorage.getItem("selecteddoctor")).medical_system_number, {
            mode: "cors",
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => {
            return response.json()
        }).then(json => {
            this.setState({
                clinics: json
            })
        });
    }


    state = {
        clickOnClinic: false,
        selectedClinic: [],
        clinics: []

    };


    changestate = event => {
        this.setState({ clickOnClinic: true })
        console.log(event)
        this.setState({ selectedClinic: event.target.value })
    }

    render() {
        console.log(this.state.selectedClinic)
        return (

            <div>

                <MenuAppBar />
                <Grid container spacing={24}>

                    <Grid item xs={12}>
                        <Paper></Paper>

                    </Grid>
                    <Grid item sm={5} style={{ paddingTop: "2%", paddingLeft: "5%", paddingRight: "5%" }}>
                        <Paper style={{ opacity: "0.9" }}>
                            {this.state.clickOnClinic ? <Calender clinic={this.state.selectedClinic} /> : null}
                        </Paper>
                    </Grid>
                    <Grid item sm={2} style={{ paddingTop: "2%", paddingRight: "5%" }}>
                        <Paper style={{ opacity: "0.9" }}>
                            <MenuList>
                                <p style={{ 'paddingRight': "5%", 'textAlign': "right" }}>مطب ها و بیمارستان ها</p>
                                {this.state.clinics.map(clinic =>
                                    <MenuItem style={{ 'paddingRight': "5%", 'textAlign': "right" }} value={clinic}
                                        onClick={() => this.setState({ selectedClinic: clinic, clickOnClinic: true })}>
                                        <p style={{ direction: 'rtl' }}>{clinic.name}</p>
                                        <br />
                                    </MenuItem>)}
                            </MenuList>
                        </Paper>
                    </Grid>

                    <Grid style={{ paddingRight: "4%" }} item sm={5}>
                        <Paper elevation={5} style={{ 'paddingRight': "4%", 'paddingLeft': "1%", opacity: "0.9" }}>

                            <Image />
                            <Information  />
                            <br />

                        </Paper>
                    </Grid>
                </Grid>
            </div>

        )
    }
}




