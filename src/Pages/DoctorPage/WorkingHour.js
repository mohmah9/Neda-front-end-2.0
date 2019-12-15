import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import UIPickers from './hourpicker'

const ExpansionPanel = withStyles({
    root: {
        border: '1px solid rgba(0,0,0,.125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
    },
    expanded: {
        margin: 'auto',
    },
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
    root: {
        backgroundColor: 'rgba(0,0,0,.03)',
        borderBottom: '1px solid rgba(0,0,0,.125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(props => <MuiExpansionPanelSummary {...props} />);

ExpansionPanelSummary.muiName = 'ExpansionPanelSummary';

const ExpansionPanelDetails = withStyles(theme => ({
    root: {
        padding: theme.spacing.unit * 2,
    },
}))(MuiExpansionPanelDetails);

class WorkingHour extends React.Component {
    state = {
        expanded: 'panel1',
    };

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    render() {
        const { expanded } = this.state;
        return (
            <div>
                <ExpansionPanel
                    square
                    expanded={expanded === 'panel1'}
                    onChange={this.handleChange('panel1')}
                >
                    <ExpansionPanelSummary style = {{background:" linear-gradient(to left, #2980b9, #6dd5fa, #ffffff)"}}>
                        <Typography>شنبه</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <UIPickers  day ={"شنبه"}  />
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel
                    square
                    expanded={expanded === 'panel2'}
                    onChange={this.handleChange('panel2')}
                >
                    <ExpansionPanelSummary style = {{background:" linear-gradient(to left, #2980b9, #6dd5fa, #ffffff)"}}>
                        <Typography>یکشنبه</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <UIPickers day ={"یکشنبه"}/>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel
                    square
                    expanded={expanded === 'panel3'}
                    onChange={this.handleChange('panel3')}
                >
                    <ExpansionPanelSummary style = {{background:"linear-gradient(to left, #2980b9, #6dd5fa, #ffffff)"}}>
                        <Typography>دوشنبه</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <UIPickers day ={"دوشنبه"} />
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel
                    square
                    expanded={expanded === 'panel4'}
                    onChange={this.handleChange('panel4')}
                >
                    <ExpansionPanelSummary style = {{background:"linear-gradient(to left, #2980b9, #6dd5fa, #ffffff)"}}>
                        <Typography>سه شنبه</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <UIPickers day ={"سه شنبه"}  />
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel
                    square
                    expanded={expanded === 'panel5'}
                    onChange={this.handleChange('panel5')}
                >
                    <ExpansionPanelSummary style = {{background:"linear-gradient(to left, #2980b9, #6dd5fa, #ffffff)"}}>
                        <Typography>چهار شنبه</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails >
                            <UIPickers day ={"چهارشنبه"}/>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel
                    square
                    expanded={expanded === 'panel6'}
                    onChange={this.handleChange('panel6')}
                >
                    <ExpansionPanelSummary style = {{background:"linear-gradient(to left, #2980b9, #6dd5fa, #ffffff)"}}>
                        <Typography>پنج شنبه</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <UIPickers day ={"پنج شنبه"}/>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel
                    square
                    expanded={expanded === 'panel7'}
                    onChange={this.handleChange('panel7')}
                >
                    <ExpansionPanelSummary style = {{background:"linear-gradient(to left, #2980b9, #6dd5fa, #ffffff)"}}>
                        <Typography>جمعه</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <UIPickers day ={"جمعه"}/>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div >
        );
    }
}

export default WorkingHour;
