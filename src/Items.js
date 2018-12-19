import React from 'react';
import ListItem from './ListItem.js';
import './css/Items.css';


class Items extends React.Component {
      render(){
        return (
          <div className="item">
            <ListItem />
        </div>
          )
        
      }
}

//in this JS i need to create a function to add an additional <list item> into the item div. the weight etc will likely be removed and become part of the sortable list.
//The list will be part of this Items class, and I will need an "Item" class that instead contains JUST the data for each item - fetched from a DB.

export default (Items);


            // <div className="item-name">
            //   <span>torch</span>
            // </div>
            // <div className="item-weight">
            //   <span className="weight-num">2</span><span> lb</span>
            // </div>
            // <div className="total-weight">
            //   <span className="total-weight-num">2</span><span> lb</span>
            // </div>
            // <div className="item-qty">
            //   <button type="button" className="qty-decrease" ><i className="fas fa-less-than"></i>  </button>
            //   <span className="qty-num"> 1 </span>
            //   <button type="button" className="qty-increase" ><i className="fas fa-greater-than"></i>  </button>
            // </div>