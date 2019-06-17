import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
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

export default class Filters extends React.Component{
    state = {
        province: '',
        filters: {},
      };
    
      handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      };

      componentWillMount(){
        return fetch('http://nedabackend.pythonanywhere.com/users/', {
          mode:"cors",
          method: 'OPTIONS',
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
          }).then(response => {
            return response.json()
          }).then(json => {
                    this.setState({
                      filters: json
                    })
                    // console.log(json)
                    // console.log(this.state.filters)
                });
      }
    render(){
        // console.log(this.state.filters['actions']['POST']['province']['choices']    )
        // console.log(this.state.filters['actions'])
        const { classes } = this.props; 
        return(
            <FormControl>
            <InputLabel htmlFor="age-customized-select" >
              Age
            </InputLabel>
            <Select
              value={this.state.province}
              onChange={this.handleChange}
              name = "province"
              input={<BootstrapInput name="age" id="age-customized-select" />}
            >
              {/* <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.state.filters.actions.POST.province.choices.map(filter => <MenuItem value={filter.value}>{filter.value}</MenuItem>)}
               */}
            </Select>
          </FormControl>
        )
    }
}