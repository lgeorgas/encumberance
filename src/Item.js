import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import './css/Item.css';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit * 2,
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 3,
  },
});

const SortableItem = SortableElement(({value}) =>
  <li>{value}</li>
);

const SortableList = SortableContainer(({objects}) => {
  return (
    <ul>
      {objects.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </ul>
  );
});

class Item extends React.Component {
  state = {
    objects: ['Obj 1', 'Obj 2', 'Obj 3', 'Obj 4', 'Obj 5', 'Obj 6'],
  };
  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      objects: arrayMove(this.state.objects, oldIndex, newIndex),
    });
  };
  render() {
    return (
      <SortableList objects={this.state.objects} onSortEnd={this.onSortEnd} />
    ) 
  }
}

function SimpleTooltips(props) {
  const { classes } = props;
    return (
      <div>
        <Tooltip title="Add" aria-label="Add">
          <Fab color="primary" className={classes.fab}>
            <AddIcon />
          </Fab>
        </Tooltip>
        <Tooltip title="Add" aria-label="Add">
          <Fab color="secondary" className={classes.absolute}>
            <AddIcon />
          </Fab>
        </Tooltip>
      </div>
    );
}

SimpleTooltips.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (Item);

//if qty = zero, delete item from list.