import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import { Button } from '@material-ui/core';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";

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

  const province = [
    {
      "value": "آذربایجان شرقی",
      "display_name": "آذربایجان شرقی"
  },
  {
      "value": "آذربایجان غربی",
      "display_name": "آذربایجان غربی"
  },
  {
      "value": "اردبیل",
      "display_name": "اردبیل"
  },
  {
      "value": "اصفهان",
      "display_name": "اصفهان"
  },
  {
      "value": "البرز",
      "display_name": "البرز"
  },
  {
      "value": "ایلام",
      "display_name": "ایلام"
  },
  {
      "value": "بوشهر",
      "display_name": "بوشهر"
  },
  {
      "value": "تهران",
      "display_name": "تهران"
  },
  {
      "value": "چهارمحال و بختیاری",
      "display_name": "چهارمحال و بختیاری"
  },
  {
      "value": "خراسان جنوبی",
      "display_name": "خراسان جنوبی"
  },
  {
      "value": "خراسان رضوی",
      "display_name": "خراسان رضوی"
  },
  {
      "value": "خراسان شمالی",
      "display_name": "خراسان شمالی"
  },
  {
      "value": "خوزستان",
      "display_name": "خوزستان"
  },
  {
      "value": "زنجان",
      "display_name": "زنجان"
  },
  {
      "value": "سمنان",
      "display_name": "سمنان"
  },
  {
      "value": "سیستان و بلوچستان",
      "display_name": "سیستان و بلوچستان"
  },
  {
      "value": "فارس",
      "display_name": "فارس"
  },
  {
      "value": "قزوین",
      "display_name": "قزوین"
  },
  {
      "value": "قم",
      "display_name": "قم"
  },
  {
      "value": "کردستان",
      "display_name": "کردستان"
  },
  {
      "value": "کرمان",
      "display_name": "کرمان"
  },
  {
      "value": "کرمانشاه",
      "display_name": "کرمانشاه"
  },
  {
      "value": "کهگیلویه و بویراحمد",
      "display_name": "کهگیلویه و بویراحمد"
  },
  {
      "value": "گلستان",
      "display_name": "گلستان"
  },
  {
      "value": "گیلان",
      "display_name": "گیلان"
  },
  {
      "value": "لرستان",
      "display_name": "لرستان"
  },
  {
      "value": "مازندران",
      "display_name": "مازندران"
  },
  {
      "value": "مرکزی",
      "display_name": "مرکزی"
  },
  {
      "value": "هرمزگان",
      "display_name": "هرمزگان"
  },
  {
      "value": "همدان",
      "display_name": "همدان"
  },
  {
      "value": "یزد",
      "display_name": "یزد"
  }
  ]

export default class Filters extends React.Component{
  constructor(props){
    super(props)
    let genderr=""
    this.state = {
      province: '',
      filters: {},
      selectedFilter : "",
      gender:'',
      result : '',
      done : false
    };
  }  
  
    

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
                     console.log(json)
                });
      }

      handlefilter = async (e) => {
        let x = await fetch('http://nedabackend.pythonanywhere.com/doctors/?=gender=' +this.genderr  + '&user__province=' + this.state.province, {
            mode: "cors",
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        x=await x.json()
        await this.setState({
            result:x
        })
        if(typeof(this.state.result)=="object"){
            this.setState({
                done:true
            })
        }
    };

      handleChanger = event =>{
        this.setState({selectedFilter : event.target.value})
        this.setState({province: event.target.value})
        console.log(this.state.selectedFilter)
        
      }
      handleChangerr = event =>{
        this.setState({gender:event.target.value})
        this.genderr=event.target.value
        console.log("this.state.gender")
        console.log(this.genderr)
      }
    render(){
        if(this.state.done) return<Redirect to={{ pathname : '/searched' , data : {search_barr : this.state.result}}}/>
        return(
          <div>
            <FormControl style={{display:"block"}}>
            <InputLabel htmlFor="age-customized-select" >
              Province
            </InputLabel>
            <Select
              value={this.state.province}
              onChange={this.handleChanger}
              name = "province"
              input={<BootstrapInput name="age" id="age-customized-select" />}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
               {province.map(p => (<MenuItem name={p.value} value={p.value} /*onclick = {() => this.setState({selectedFilter : p.value})}*/ onclick = {this.handleChanger.bind(this)}>{p.value}</MenuItem>))}
              
            </Select>
          </FormControl>
          <FormControl style={{display:'block'}}> 
          <InputLabel htmlFor="age-customized-select" >
            gender
          </InputLabel>
          <Select
            value={this.state.gender}
            onChange={this.handleChangerr}
            name = "gender"
            input={<BootstrapInput name="age" id="age-customized-select" />}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem name="gender" value= "زن"  onclick = {this.handleChangerr.bind(this)}>زن</MenuItem>
            <MenuItem name="gender" value= "مرد"  onclick = {this.handleChangerr.bind(this)}>مرد</MenuItem>
            
          </Select>
          <Button style={{display:'block'}} onClick={this.handlefilter} variant="outlined" color = "rgba(33,66,99,1)" >
                filter
          </Button>
        </FormControl>
        
        </div>
        )
    }
}