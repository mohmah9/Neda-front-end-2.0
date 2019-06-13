import React from 'react'
import './Login.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import Signup from '../Signup/Signup';


export default class Login extends React.Component{
    state = {
        checkedA: true,
      };
      handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
      };
    
    render(){
        return(
            <div className= "login_form">
            <Paper elevation={4} className="login_paper" >      
                <h1 ><center>Login</center></h1>
                <div className="fields">
                 <TextField id="outlined-email-input" fullWidth className="usertext" label="User Name" type="email" name="email" autoComplete="email" margin="normal"/>
                </div>
                <div className="fields">
                    <TextField id="outlined-password-input" fullWidth className="passtext" label="Password"type="password"autoComplete="current-password"margin="normal"/>
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
                    <Button variant="contained" color = "primary" fullWidth onClick = {Signup}>
                        Log in
                    </Button>
                </div>      
            <h3 className = "forgot_password"><a href = "www.google.com">forgot your password?</a> </h3>  
            <h5 className = "signup">not a member ? <a href = "/Signup">sign up now</a> </h5>    
            </Paper>
            </div>
        )

    }
}

