import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import { Button } from '@material-ui/core';
import Province from '../PatientProfile/Province'
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as filter_api from "../../Redux/Filter/Filter_action";

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

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing.unit,
    },
    bootstrapFormLabel: {
        fontSize: 18,
    },
});


class Filters extends React.Component {
    constructor(props) {
        super(props)
        let genderr = ""
        let selectedFilters = ""
        this.state = {
            province: '',
            filters: {},
            selectedFilter: "",
            gender: '',
            result: '',
            done: false
        };
    }

    handleChanger = event => {
        this.selectedFilters = event.target.value
        this.setState({ province: event.target.value })

    }
    handleChangerr = event => {
        this.setState({ gender: event.target.value })
        this.genderr = event.target.value
    }
    render() {
        // if (this.state.done) return <Redirect to={{ pathname: '/searched', data: { search_barr: this.state.result } }} />
        return (
            <div>
                <FormControl style={{ display: "block" }}>
                    <InputLabel htmlFor="age-customized-select" >
                        Province
            </InputLabel>
                    <Select
                        value={this.state.province}
                        onChange={this.handleChanger}
                        name="province"
                        input={<BootstrapInput name="age" id="age-customized-select" />}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {Province.map(p => (<MenuItem name={p.value} value={p.value} onclick={this.handleChanger.bind(this)}>{p.value}</MenuItem>))}

                    </Select>
                </FormControl>
                <FormControl style={{ display: 'block' }}>
                    <InputLabel htmlFor="age-customized-select" >
                        gender
          </InputLabel>
                    <Select
                        value={this.state.gender}
                        onChange={this.handleChangerr}
                        name="gender"
                        input={<BootstrapInput name="age" id="age-customized-select" />}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem name="gender" value="زن" onclick={this.handleChangerr.bind(this)}>زن</MenuItem>
                        <MenuItem name="gender" value="مرد" onclick={this.handleChangerr.bind(this)}>مرد</MenuItem>

                    </Select>
                    <Button style={{ display: 'block' }} onClick={() => this.props.filter([this.genderr, this.state.province])} variant="outlined" color="rgba(33,66,99,1)" >
                        filter
          </Button>
                </FormControl>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    filter: (keyfilter) => dispatch(filter_api.filter(keyfilter))
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);