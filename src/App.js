import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import './css/App.css';
import Items from './Items.js';

function TabContainer(props){
  return (  
    <Typography component="div" class="tabContent" style={{padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}) ;


class App extends React.Component {
  state = {
    value: 2,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar className="AppMenuBar" position="static">
          <Tabs value={value} onChange={this.handleChange} centered>
            <Tab label="Character" disabled />
            <Tab label="Spells" disabled />
            <Tab label="Inventory" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer className="tabContent">Character</TabContainer>}
        {value === 1 && <TabContainer className="tabContent">Spells</TabContainer>}
        {value === 2 && <TabContainer className="tabContent"><Items /></TabContainer>}
      </div>
    );
  }
}
 
export default withStyles(styles)(App);

