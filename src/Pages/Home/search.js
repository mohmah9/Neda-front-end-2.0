import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';


const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
    },
  });
  
  function Search_com(props) {
    const { classes } = props;
  
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className={classes.paper}  style={{backgroundColor:"rgba(255,255,255,0.5 )" }}>
              <div>
                <TextField variant="outlined" id="standard-search" fullWidth label="Search field" type="search" margin="normal" />
                <Button variant="outlined" color = "rgba(33,66,99,1)" >
                Search
                </Button>
                </div>
            </Paper>
        </Grid></Grid>
      </div>
    );
  }
  
  Search_com.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Search_com);