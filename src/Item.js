import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import './css/Item.css';

class Checkboxes extends React.Component {
  state = {
    checkedA: true,
    checkedB: true,
    checkedF: true,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

}

class Item extends React.Component {
      render(){
        return (
          <div className="item">
          <Checkbox value = "checkedA" />
            <div className="item-name">
              <span>torch</span>
            </div>
            <div className="item-weight">
              <span className="weight-num">2</span><span> lb</span>
            </div>
            <div className="total-weight">
              <span className="total-weight-num">2</span><span> lb</span>
            </div>
            <div className="item-qty">
              <button type="button" className="qty-decrease" ><i className="fas fa-less-than"></i>  </button>
              <span className="qty-num"> 1 </span>
              <button type="button" className="qty-increase" ><i className="fas fa-greater-than"></i>  </button>
            </div>
        </div>
          )
        
      }
}

export default (Item);


