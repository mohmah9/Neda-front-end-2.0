import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";

export default class ViewInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Doctor: '',
      Clinic: '',
    }
  }

  componentWillMount() {
    Promise.all([
      fetch(this.props.Appointment.doctor).then(value => value.json()),
      fetch(this.props.Appointment.clinic).then(value => value.json()),
    ])
      .then((value) => {
        this.setState({
          Doctor: value[0],
          Clinic: value[1],

        });
      })
      .catch((err) => {
        console.log(err);
      });

  }


  reserveTime = async (e) => {
    console.log(this.props.Appointment)
    let x = await fetch(this.props.Appointment.url, {
      mode: "cors",
      method: 'PUT',
      body: JSON.stringify({
        has_reserved: false,
      }),
      headers: {
        "Content-type": "application/json;charset=UTF-8",
        "Authorization": "Token " + localStorage.getItem('token')
      }
    })

    await this.setState({ open: false })
  };



  render() {
    return (
      <div>

        <Button fullWidth >
          <Paper style={{ boxShadow: "2px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", width: "-webkit-fill-available" }}>
            <div>
              <div>

                <img src={this.state.Doctor.picture} style={{
                  width: "75px",
                  height: "75px", position: "absolute", left: "5%", paddingTop: "2%"
                }} alt=" " />
              </div>
              <div style={{ 'textAlign': "right", 'marginLeft': "30%", paddingRight: "2%" }}>
                <br />
                {this.state.Doctor.user ?
                  <p>دکتر {this.state.Doctor.user.first_name + " " + this.state.Doctor.user.last_name}</p>
                  : "Loading ..."}
                <p>تخصص و فوق تخصص :  {this.state.Doctor.expertise}</p>
                <p>{this.props.Appointment.date_time.substring(0, 10)} : تاریخ </p>
                <p>ساعت : {this.props.Appointment.date_time.substring(11, 16)}</p>
                {this.state.Clinic ?
                  <div>
                    <p>آدرس مطب : {this.state.Clinic.address}</p>
                    <p>تلفن : {this.state.Clinic.phone_number}</p>
                  </div>
                  : "Loading ..."
                }
                <br />
              </div>
            </div>
          </Paper>
        </Button>
        <Button variant="contained" fullWidth color="primary" onClick={this.reserveTime}>
          کنسل
          </Button>
        <br />
      </div>
    )
  }
}