import React from 'react';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Province from './Province.js'
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles(theme => ({
    root: {
      'label + &': {
        marginTop: theme.spacing.unit * 3,
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      width: 'auto',
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }))(InputBase);
  
 export default class ViewAndEditPatientInformation extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        first_name: this.props.patient.user.first_name,
        last_name: this.props.patient.user.last_name,
        username: this.props.patient.user.username,
        password: this.props.patient.user.password,
        mobile_number: this.props.patient.mobile_number,
        province: this.props.patient.user.province,
        email: this.props.patient.user.email,
  
        social_number: this.props.patient.social_number,
        gender: this.props.patient.gender,
        phone_number: this.props.patient.phone_number,
        address: this.props.patient.address,
        date_of_birth: "1360-01-14",
        medical_system_number: this.props.patient.user.medical_system_number
  
      }
    }
  
  
    handleChanger(e) {
      this.setState({ [e.target.name]: e.target.value });
    };
    handleChangerr = event => {
      // this.setState({ selectedFilter: event.target.value })
      this.selectedFilters = event.target.value
      this.setState({ province: event.target.value })
      console.log(this.selectedFilters)
  
    }
  
    handleEditpatient = e => {
      fetch('http://nedabackend.pythonanywhere.com/patients/0012356987/', {
        mode: "cors",
        method: 'PUT',
        body: JSON.stringify({
          user: {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            username: this.state.username,
            password: this.state.password,
            province: this.state.province,
            email: this.state.email,
          },
          mobile_number: this.state.mobile_number,
          social_number: this.state.social_number,
          phone_number: this.state.phone_number,
          address: this.props.patient.address,
          date_of_birth: "1360-01-14",
          gender: this.state.gender,
          medical_system_number: this.props.patient.user.medical_system_number
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "Authorization": "Token " + localStorage.getItem('token')
        }
      }).then(response => {
        return response.json()
      }).then(json => {
        console.log(json)
      });
  
    };
  
    render() {
      return (
        <div>
          <div className="fields">
            <TextField id="outlined-email-input" value={this.state.first_name} onChange={this.handleChanger.bind(this)} fullWidth className="usertext" label="Name" type="Name" name="first_name" margin="normal" variant="outlined" />
          </div>
          <div className="fields">
            <TextField id="outlined-password-input" value={this.state.last_name} onChange={this.handleChanger.bind(this)} fullWidth className="passtext" label="Last name" name="last_name" type="Name" margin="normal" variant="outlined" />
          </div>
          <div className="fields">
            <TextField id="outlined-email-input" fullWidth className="usertext" label="User Name" type="Name" name="username" margin="normal" variant="outlined" />
          </div>
          <div className="fields">
            <TextField id="outlined-email-input" value={this.state.email} onChange={this.handleChanger.bind(this)} fullWidth className="usertext" label="Email" type="eamil" name="email" autoComplete="email" margin="normal" variant="outlined" />
          </div>
          <div className="fields">
            <TextField id="outlined-password-input" fullWidth className="passtext" label="Password" name="password" type="password" margin="normal" variant="outlined" />
          </div>
          <div className="fields">
            <TextField id="outlined-email-input" value={this.state.social_number} onChange={this.handleChanger.bind(this)} fullWidth className="usertext" label="Social Number" type="text" name="social_number" margin="normal" variant="outlined" />
          </div>
          <div className="fields">
            <TextField id="outlined-password-input" value={this.state.mobile_number} onChange={this.handleChanger.bind(this)} fullWidth className="passtext" label="mobile Number" type="tel" name="mobile_number" margin="normal" variant="outlined" />
          </div>
          <div className="fields">
            <TextField id="outlined-password-input" value={this.state.phone_number} onChange={this.handleChanger.bind(this)} fullWidth className="passtext" label="phone number" name="phone_number" type="text" margin="normal" variant="outlined" />
          </div>
          <div className="fields">
            <TextField id="outlined-password-input" value={this.state.address} onChange={this.handleChanger.bind(this)} fullWidth className="passtext" label="address" name="address" type="text" margin="normal" variant="outlined" />
          </div>
          <div className="fields">
            <TextField id="outlined-password-input" value={this.state.date_of_birth} onChange={this.handleChanger.bind(this)} fullWidth className="passtext" label="birth day" name="date_of_birth" type="text" margin="normal" variant="outlined" />
          </div>
          <div className="fields">
            <FormControl className="fields" style={{ display: "block" }}>
              <InputLabel htmlFor="age-customized-select" >
                Province
                      </InputLabel>
              <Select
                value={this.state.province}
                onChange={this.handleChangerr}
                name="province"
                input={<BootstrapInput name="age" id="age-customized-select" />}
                style={{ 'marginLeft': "50%" }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {Province.map(p => (<MenuItem name={p.value} value={p.value} /*onclick = {() => this.setState({selectedFilter : p.value})}*/ onclick={this.handleChanger.bind(this)}>{p.value}</MenuItem>))}
  
              </Select>
            </FormControl>
          </div>
  
  
          <br />
          <div className="fields">
            <Button variant="contained" onClick={this.handleEditpatient} color="primary" fullWidth>
              Edit
                   </Button>
          </div>
          <br />
  
        </div>
      )
    }
  }
  
  
  