import React from 'react'
import './Login.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';

export default class Login extends React.Component{
    state = {
        checkedA: true,
        username:"",
        password:"",
        
      };
      handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
      };
      handleChanger(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
      handleSubmit= e => {
        
        fetch('http://127.0.0.1:8000/get_token/', {
            mode:"cors",
			method: 'POST',
			body: JSON.stringify({
				username: this.state.username,
				password: this.state.password
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		}).then(response => {
				return response.json()
			}).then(json => {
                console.log(json)
            });

        };
        
    
    render(){
        // const {responsee , data , log} = this.state
        return(

            <div className= "login_form">
            <Paper elevation={4} className="login_paper" >      
                <h1 ><center>Login</center></h1>
                <div className="fields">
                <TextField onChange={this.handleChanger.bind(this)} value={this.state.username} id="outlined-email-input" fullWidth className="usertext" label="userName" type="email" name="username" autoComplete="email" margin="normal"/>
                </div>
                <div className="fields">
                <TextField onChange={this.handleChanger.bind(this)} value={this.state.password} id="outlined-password-input" fullWidth className="passtext"  label="password" name='password' type="password"autoComplete="current-password"margin="normal"/>
                </div>
                <div className = "check_box">
                    <Checkbox
                    checked={this.state.checkedA}
                    onChange={this.handleChange('checkedA')}
                    value="checkedA"
                    color="primary"
                    />remember me
                </div>
                <div className='btn-submit'>
                    <Button variant="contained" color = "primary" fullWidth onClick={this.handleSubmit}>
                        Log in
                    </Button>
                </div>      
            <h3 className = "forgot_password">forgot your password? </h3>  
            <h5 className = "signup">not a member ? <a href = "/Signup">sign up now</a> </h5>    
            </Paper>
            </div>
        )

    }
}