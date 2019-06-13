import React from 'react'
import './Signup.css'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
      
    backgroundColor: theme.palette.background.paper,
    width: 500,
    // margin :(6,35,0,3)

  },
});

class FullWidthTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className='Signup'>  
      <div className={classes.root } style = {{'backgroundColor' : "lightGray"}}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="Patient" />
            <Tab label="Doctor" />
            <Tab label="Hospital" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction} ><h1 ><center>Patient</center></h1>
                <div className="fields">
                 <TextField id="outlined-email-input" fullWidth className="usertext" label="Name" type="email" name="email" autoComplete="email" margin="normal"/>
                </div>
                <div className="fields">
                    <TextField id="outlined-password-input" fullWidth className="passtext" label="Last name"type="email"autoComplete="current-password"margin="normal"/>
                </div>
                <div className="fields">
                 <TextField id="outlined-email-input" fullWidth className="usertext" label="User Name" type="email" name="email" autoComplete="email" margin="normal"/>
                </div>
                <div className="fields">
                    <TextField id="outlined-password-input" fullWidth className="passtext" label="Password"type="password"autoComplete="current-password"margin="normal"/>
                </div>
                <div className="fields">
                 <TextField id="outlined-email-input" fullWidth className="usertext" label="Social Number" type="email" name="email" autoComplete="email" margin="normal"/>
                </div>
                <div className="fields">
                    <TextField id="outlined-password-input" fullWidth className="passtext" label="Phon Nmber"type="password"autoComplete="current-password"margin="normal"/>
                </div>
                <div className='btn-submit'>
                    <Button variant="contained" color = "primary" fullWidth>
                        submit
                    </Button>
                </div>      
                </TabContainer>
          <TabContainer dir={theme.direction}><h1 ><center>Doctor</center></h1>
                <div className="fields">
                 <TextField id="outlined-email-input" fullWidth className="usertext" label="Name" type="email" name="email" autoComplete="email" margin="normal"/>
                </div>
                <div className="fields">
                    <TextField id="outlined-password-input" fullWidth className="passtext" label="Last name"type="email"autoComplete="current-password"margin="normal"/>
                </div>
                <div className="fields">
                 <TextField id="outlined-email-input" fullWidth className="usertext" label="User Name" type="email" name="email" autoComplete="email" margin="normal"/>
                </div>
                <div className="fields">
                    <TextField id="outlined-password-input" fullWidth className="passtext" label="Password"type="password"autoComplete="current-password"margin="normal"/>
                </div>
                <div className="fields">
                 <TextField id="outlined-email-input" fullWidth className="usertext" label="Social Number" type="email" name="email" autoComplete="email" margin="normal"/>
                </div>
                <div className="fields">
                    <TextField id="outlined-password-input" fullWidth className="passtext" label="Phon Nmber"type="password"autoComplete="current-password"margin="normal"/>
                </div>
                <Button variant="contained" color = "primary" fullWidth>
                        submit
                    </Button>
                </TabContainer>
          <TabContainer dir={theme.direction}><h1 ><center>Hospital</center></h1>
                <div className="fields">
                 <TextField id="outlined-email-input" fullWidth className="usertext" label="Name" type="email" name="email" autoComplete="email" margin="normal"/>
                </div>
                <div className="fields">
                    <TextField id="outlined-password-input" fullWidth className="passtext" label="Last name"type="email"autoComplete="current-password"margin="normal"/>
                </div>
                <div className="fields">
                 <TextField id="outlined-email-input" fullWidth className="usertext" label="User Name" type="email" name="email" autoComplete="email" margin="normal"/>
                </div>
                <div className="fields">
                    <TextField id="outlined-password-input" fullWidth className="passtext" label="Password"type="password"autoComplete="current-password"margin="normal"/>
                </div>
                <div className="fields">
                 <TextField id="outlined-email-input" fullWidth className="usertext" label="Social Number" type="email" name="email" autoComplete="email" margin="normal"/>
                </div>
                <div className="fields">
                    <TextField id="outlined-password-input" fullWidth className="passtext" label="Phone Number"type="password"autoComplete="current-password"margin="normal"/>
                </div>
                <Button variant="contained" color = "primary" fullWidth>
                        submit
                    </Button>
                </TabContainer>
        </SwipeableViews>
      </div>
      </div>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);