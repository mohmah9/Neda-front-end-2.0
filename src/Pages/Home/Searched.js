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
import FullWidthGrid from './Searchgrid';
import Search_com from './search';
import { Link } from '@material-ui/core';

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

class Searched extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loaded_doctors: [],
			anchorEl: null,
		};
	}



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
		console.log(this.props.location.data)
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
              {this.props.token}
							</Typography>
							<div>
								<IconButton style={bar_style}
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
									onClose={this.handleClose}>
									<MenuItem onClickAway={this.handleClose} ><Link to={{ pathname: "/Login", data: "hgfgh" }} style={{ textDecoration: "none" }}>profile</Link></MenuItem>
									<a href="/Login" style={{ textDecoration: "none" }}><MenuItem onClickAway={this.handleClose} >Logout </MenuItem></a>
								</Menu>
							</div>
						</Toolbar>
					</AppBar>
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
					<FullWidthGrid  data={this.props.location.data} />

				</div>
			</div>
		);
	}
}

Searched.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Searched);