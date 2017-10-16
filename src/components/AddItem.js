// Here you define the form component, but it won't do anything
// This will take in an event handler function, and just call it
// This is a component that should take 2 props:
// 1. an array of products
// 2. a function that will be called when the form is submitted
// The parent component, ShoppingCart, will eventually pass in a real function.

import React from 'react'
import {Row, Input, Button} from 'react-materialize'

const AddItem = ({ products, itemAdded }) => {

  const itemWasAdded = (e) => {
    e.preventDefault()
    itemAdded({
      quantity: e.target.quantity.value,
      product: products.find(product => product.id === parseInt(e.target.productId.value, 10)),
    })
  }


  return (
    <form className="container" onSubmit={ itemWasAdded } >
      <h3>Add Item</h3>

      <Row>
      	<Input s={6} type='select' label="Choose a Product" name="productId" >
          { products.map(product => <option key={product.id} value={product.id}>{ product.name }</option>) }
      	</Input>
      </Row>

      <Row>
      	<Input s={2} type='number' label="Quantity" defaultValue='1' name="quantity"></Input>
      </Row>

      <Button waves='light'>Add Item</Button>

    </form>
  )
}

export default AddItem
