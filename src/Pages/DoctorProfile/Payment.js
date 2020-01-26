import React from 'react'
import './Payment.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { BrowserRouter as Router, Route, Link , Redirect} from "react-router-dom";
import { connect } from "react-redux";
import * as doctorProfile_api from "../../Redux/DoctorProfile/DoctorProfile_action"
import nurse from '../../Images/payment.jpg';
// import MenuAppBar from '../Home/NavBar'


class Payment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            done:false,
            username: "",
            password: "",
            CVV2:"",
            expiration:""
        };
    
      }
    
    
    handle_pay = () =>{
        this.props.reserve_time(this.props.location.time)
        this.setState({done:true})
    }
    handleChanger(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        if (this.state.done) return <Redirect to={{ pathname: '/Homepage' }} />
        return (
            
            <div>
                {/* <MenuAppBar /> */}
                <img src={nurse} style={{ width:"100%",height:"100%", backgroundSize :"cover",filter : " blur(5px)" , backgroundColor : "rgba(0, 0, 0, 0.5)" }} alt = " "></img>
                
                <div className="login_form" style={{ position: "absolute" }} >
            
                <Paper elevation={4} className="login_paper" style ={{opacity : "0.8"}}>
                    
                    <h1 ><center>صفحه ی پرداخت</center></h1>
                    <div className="fields" >
                        <TextField onChange={this.handleChanger.bind(this)} value={this.state.username} id="filled" fullWidth className="card" label="شماره ی کارت" type="number" name="username" autoComplete="off" margin="normal" />
                    </div>
                    <div className="fields">
                        <TextField onChange={this.handleChanger.bind(this)} value={this.state.password} id="filled" fullWidth className="pass" label="رمز دوم" name='password' type="password" autoComplete="off" margin="normal" />
                    </div>
                    <div className="fields">
                        <TextField onChange={this.handleChanger.bind(this)} value={this.state.password} id="filled" fullWidth className="cvv" label="CVV2" name='CVV2' type="password" autoComplete="off" margin="normal" />
                    </div>
                    <div className="fields">
                        <TextField onChange={this.handleChanger.bind(this)} value={this.state.password} id="filled" fullWidth className="expire" label="تاریخ انقضا" name='expiration' type="text" autoComplete="off" margin="normal" />
                    </div>
                    <div className='btn-submit'>
                    <Button variant="contained" color="green" fullWidth  onClick={this.handle_pay}>
                            پرداخت
                    </Button>
                    </div>
                    <br />
                </Paper>
            </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    // mine : state.Login_reducer.logged_in
});

const mapDispatchToProps = dispatch => ({
    reserve_time : (id) => dispatch(doctorProfile_api.reserve_time(id)),
    // loginAction: (user, pass) => dispatch(token_api.loginAction(user, pass))
});

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
