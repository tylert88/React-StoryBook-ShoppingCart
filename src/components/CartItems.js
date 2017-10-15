import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import {Row, Col, Chip} from 'react-materialize'
import CartItem from './CartItem';

const getTotal = (items) => (
  items.reduce( (total, item) => total + item.product.priceInCents * item.quantity, 0 )
)

const CartItems = ({ items }) => (
  <div className="container">
    <h1>Items</h1>
    <div className="collection">
      <div className="collection-item row grey lighten-3">
        <div className="col s8">Product</div>
        <div className="col s2">Price</div>
        <div className="col s2">Quantity</div>
      </div>
      { items.map( item => <CartItem key={ item.id } item={ item } />) }
    </div>
    <Row>
     <Col s={12}>
       <Chip>
          <strong>Total:</strong> ${ (getTotal(items) / 100).toFixed(2) }
       </Chip>
      </Col>
    </Row>
  </div>
)



export default CartItems
