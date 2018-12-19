import React from 'react';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import FloatingActionButtons from './fab.js';
import Item from './Item.js'
import './css/ListItem.css';

// const styles = theme => ({
//   fab: {
//     margin: theme.spacing.unit * 2,
//   },
//   absolute: {
//     position: 'absolute',
//     bottom: theme.spacing.unit * 2,
//     right: theme.spacing.unit * 3,
//   },
// });

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

class ListItem extends React.Component {
  state = {
    objects: [<Item/>, 'Obj 2', 'Obj 3', 'Obj 4', 'Obj 5', 'Obj 6'],
  };
  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      objects: arrayMove(this.state.objects, oldIndex, newIndex),
    });
  };
  render() {
    return (
      <div>
      <SortableList objects={this.state.objects} onSortEnd={this.onSortEnd} />
      <FloatingActionButtons/>
      </div>
    ) 
  }
}

export default (ListItem);

//if qty = zero, delete item from list.