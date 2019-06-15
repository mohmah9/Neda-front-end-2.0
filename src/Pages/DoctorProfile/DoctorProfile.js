import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button, Icon } from '@material-ui/core';
import 'react-day-picker/lib/style.css'
import Calender from './Calender';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';


let Doctor = {
  Name : 'رامین',
  LastName : 'محمدی',
  Image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2D5lfr0312HCDhvFVqdZSuBHiQrvY_ZfRnNn_Uwlo0g9N-tJl',
  MedicalSystemNumber : 84771,
  Expertise : 'جراح مغز و اعصاب',
  Address : "تهران خیابان شریعتی بالاتر از ظفر قبل از بیمارستان ایرانمهر خیابان پور مشکانی یا کودکان غزه ساختمان پزشکان بزرگمهر طبقه پنجم",
  phone : "۰۲۱-۲۲۶۱۷۳۰۵",
  Bio : "انجام نوار مغز نوار عصب داپلر گردن نوار چشم"
};

function Image(props){

  return(
     <div>
       <div style = {{'marginTop' : "3%",  'marginRight' : "15%"}}>
            <img src= {props.Doctor.Image}
              alt = {props.Doctor.Name + " " + props.Doctor.LastName} 
              style = 
              {{
                'alignSelf' : "right",
                'marginLeft' : "90%",
                 width: "135px",
                 height: "135px",
                 'borderRadius' : "50%",

                 }}/>                
          </div>
     </div>
  );
}

function Information(props){

  return(
      <div style = {{'textAlign' : "right",'marginLeft' : "30%"}}>
          <div style = {{'paddingTop' : "2%"}}>
          <p>دکتر {Doctor.Name + " " + Doctor.LastName}</p> 
          </div>
          <div style = {{'paddingTop' : "2%"}}>
              <p>درباره پزشک</p>
              <p style = {{color : "grey"}}>{props.Doctor.Bio}</p>
          </div>
          <p  style = {{'paddingTop' : "2%"}}>شماره نظام پزشکی  {props.Doctor.MedicalSystemNumber}</p>
          <div style = {{'paddingTop' : "2%"}}>
              <p>تخصص و فوق تخصص</p>
              <p style = {{color : "grey"}}>{props.Doctor.Expertise}</p>
          </div>
      </div> 
  );

}


export default class DoctorProfile extends React.Component {

  state={
    clickOnClinic : false,
  };

 changestate = () => {
    this.setState({clickOnClinic : true})
  };

  render()
  {

  return (
    <main style ={{backgroundImage : "https://s3.amazonaws.com/media-p.slid.es/uploads/1015675/images/5881492/computer-1149148_1920.jpg",
    filter: "grayscale(100%)"
  }}>
    <div >
      <Grid container spacing = {10}>

        <Grid item xs={12}>
          <Paper>navBar</Paper>
        </Grid>

        <Grid item xs={2}></Grid>
        <Grid item xs={3} style = {{marginRight : "15%",marginLeft : "5%", marginTop : "10%"}}>
        <Paper>
          <MenuList>
            <p style = {{'paddingRight' : "5%", 'textAlign' : "right"}}>مطب ها و بیمارستان ها</p>
            <MenuItem style = {{'paddingRight' : "5%", 'textAlign' : "right"}}  onClick = {this.changestate}>بیمارستان مهر</MenuItem>
            <MenuItem style = {{'paddingRight' : "5%", 'textAlign' : "right"}}  onClick = {this.changestate}>بیمارستان نجمیه</MenuItem>
          </MenuList>
        </Paper>
        </Grid>
        
        <Grid style = {{marginRight : "1%", marginTop : "3%"}} item xs={4}>
          <Paper  elevation={4} style = {{'paddingRight' : "4%", 'paddingLeft' : "1%", 'paddingBottom' : "1%", opacity: "0.8"}}>
            
            <Image Doctor = {Doctor}/>
            <Information Doctor = {Doctor}/>  
          
          </Paper>  
        </Grid>
        
        <Grid item xs={1}></Grid>
        <Grid item xs={5}>
          {this.state.clickOnClinic ? <Calender/> : null}
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </div>
    </main>
  )
  }
}




