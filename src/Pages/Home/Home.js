import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slides from './slides.js';
import FullWidthGrid from './grid';
import Search_com from './search';
import { BrowserRouter as Router, Route, Redirect, withRouter } from "react-router-dom";
import MenuAppBar from './NavBar'
import { connect } from "react-redux";
import * as home_default_api from "../../Redux/Homepage/Homepage_action";

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
            filters: [],
            prof: false,

        };
    }

    componentWillMount() {
        this.props.home_default()
    }

    render() {
        console.log(this.props.doctor_result.home_default_result)
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
                    <Search_com />
                </div>
                <div>
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                </div >
                <div style={{ marginLeft: '1%', marginRight: '1%' }}>
                    <FullWidthGrid />

                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    doctor_result: state.Homepage_reducer
});

const mapDispatchToProps = dispatch => ({
    home_default: () => dispatch(home_default_api.home_default())
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MenuApp));