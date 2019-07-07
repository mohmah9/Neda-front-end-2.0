import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '../../../node_modules/@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';


const bar_style={
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

class MenuAppBar extends React.Component {
  state = {
    loaded_doctors: [],
    anchorEl: null,
  };

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  
  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
    <div>
      <div className={classes.root} >
        <AppBar position='static' style={bar_style}>
          <Toolbar>
            <IconButton className={classes.menuButton} style={bar_style} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              NEDA
            </Typography>
              <div>
                <IconButton  style={bar_style}
                  aria-owns={open ? 'menu-appbar' : false}
                  aria-haspopup="true"
                  onClick={this.handleMenu} 
                  color='inherit'
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  
                  <MenuItem onClick={this.handleClose}>
                  <Link to={{ pathname: '/PatientProfile', data : { Doctor: this.props.Doctor}}} style={{ textDecoration: "none" }} >
                    Profile
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
              </div>
          </Toolbar>
        </AppBar>
      </div>
    </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);