import React from 'react'

const CartItem = ({ item }) => (
  <div className="collection-item">
    <div className="row">
      <div className="col s8">
        { item.product.name }
      </div>
      <div className="col s2">
        ${ (item.product.priceInCents / 100).toFixed(2) }
      </div>
      <div className="col s2">
        { item.quantity }
      </div>
    </div>
  </div>
)

export default CartItem
