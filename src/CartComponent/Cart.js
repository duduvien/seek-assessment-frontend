// src/CartComponent/Cart.js
import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import './Cart.css';

export default class Cart extends React.Component {
  constructor(props){
    super(props);
    this.handleOnDelete = this.handleOnDelete.bind(this);
  }
  handleOnDelete(aid) {
    this.props.delete(aid);
  }

  render() {
    return (
      <div>
        <ListGroup>
        {
          this.props.carts.map((cart) => {
            return (
              <div key={cart.ads.id}>
                <ListGroupItem header={cart.ads.name}>
                  <p>Quantity: {cart.qty}</p>
                  <p>Price: $ {cart.ads.price}</p>
                  <span className="remove-btn" onClick={e => this.handleOnDelete(cart.ads.id)}><i className="glyphicon glyphicon-remove"></i></span>
                </ListGroupItem>
                </div>
            );
          })
        }
        </ListGroup>

        <p>Grand Total: $ {this.props.grandTotal}</p>
      </div>
    );
  }
}
