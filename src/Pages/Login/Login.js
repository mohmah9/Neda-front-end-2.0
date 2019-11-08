import React from 'react'
import './Login.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as token_api from "../../Redux/Login/Login_Action";
import {Icon} from 'semantic-ui-react';
import nurse from '../../Images/comp.jpg';
import MenuAppBar from '../Home/NavBar'

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
    },
});

class Login extends React.Component {
    constructor(props) {
        super(props)

    }
    state = {
        checkedA: true,
        username: "",
        password: "",
        loged: false,
        wrong_input: ""
    };
    handleChanger(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { loged, wrong_input } = this.state
        if (this.props.mine) return <Redirect to={{ pathname: '/Homepage' }} />
        return (
            <div>
                <MenuAppBar />
                    <img src={nurse} style={{ width:"100%",height:"100%", backgroundSize :"cover",filter : " blur(5px)" , backgroundColor : "rgba(0, 0, 0, 0.5)" }}></img>
            <div className="login_form" style={{ position: "absolute" }} >
            
                <Paper elevation={4} className="login_paper" style ={{opacity : "0.8"}}>
                    
                    <h1 ><center>ورود</center></h1>
                    <div className="fields" >
                        <TextField onChange={this.handleChanger.bind(this)} value={this.state.username} id="outlined-email-input" fullWidth className="usertext" label="نام کاربری" type="email" name="username" autoComplete="email" margin="normal" />
                    </div>
                    <div className="fields">
                    <Icon disabled name='users' />
                        <TextField onChange={this.handleChanger.bind(this)} value={this.state.password} id="outlined-password-input" fullWidth className="passtext" label="رمز عبور" name='password' type="password" autoComplete="current-password" margin="normal" />
                    </div>
                    <div className="check_box">
                        <p style={{ color: 'red' }}>{wrong_input}</p>
                    </div>
                    <div className='btn-submit'>
                    <Button variant="contained" color="primary" fullWidth onClick={() => this.props.loginAction(this.state.username,this.state.password)}>
                            ورود
                    </Button>
                    </div>
                    <h5 className="signup">عضو نیستی ؟   <a href="/Signup">همین الان عضو شو</a> </h5>
                </Paper>
            </div>
            </div>
        )

    }
}

const mapStateToProps = state => ({
    mine : state.Login_reducer.logged_in
});

const mapDispatchToProps = dispatch => ({
    loginAction: (user, pass) => dispatch(token_api.loginAction(user, pass))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
