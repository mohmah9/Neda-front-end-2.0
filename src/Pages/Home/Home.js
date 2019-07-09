import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Slides from './slides.js';
import FullWidthGrid from './grid';
import Search_com from './search';
import { BrowserRouter as Router, Route, Redirect, withRouter } from "react-router-dom";
import MenuAppBar from './NavBar'

const bar_style = {
    background: 'rgba(0, 167, 210, 1)  ',
    boxShadow: '0.5px 0px 0px 3px rgba(255, 255, 255, .3)'
}

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class MenuApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded_doctors: [],
            anchorEl: null,
            result: [],
            filters: [],
            prof: false,

        };
    }

    componentDidMount() {
        return fetch('http://nedabackend.pythonanywhere.com/doctors/', {
            mode: "cors",
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => {
            return response.json()
        }).then(json => {
            this.setState({
                result: json
            })
            console.log(json)
        });
    }

    handlesearch = async keyword => {
        console.log(keyword)
        let x = await fetch('http://nedabackend.pythonanywhere.com/doctors/?search=' + keyword, {
            mode: "cors",
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        x = await x.json()
        await this.setState({
            result: x
        })

    }
    handlefilter = async keyfilter => {
        console.log(keyfilter)
        let x = await fetch('http://nedabackend.pythonanywhere.com/doctors/?gender=' + keyfilter[0] + '&user__province=' + keyfilter[1], {
            mode: "cors",
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        x = await x.json()
        await this.setState({
            result: x
        })
        console.log(x)
    };

    handleChange = event => {
        this.setState({ auth: event.target.checked });
    };


    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;
       
        return (
            <div>
                <div >
                    <MenuAppBar />
                </div>
                <div style={{ height: "8px", backgroundColor: "rgba(0, 91, 114, 0.48)" }}></div>
                <div style={{ position: "absolute" }}>
                    <Slides />
                </div>
                <div style={{ left: "25%", top: "90%", width: "50%", position: 'absolute' }}>
                    <Search_com searcher={this.handlesearch} />
                </div>
                <div>
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                </div >
                <div style={{ marginLeft: '1%', marginRight: '1%' }}>
                    <FullWidthGrid filtering={this.handlefilter} result={this.state.result} />

                </div>
            </div>
        );
    }
}

export default withStyles(styles)(MenuApp);