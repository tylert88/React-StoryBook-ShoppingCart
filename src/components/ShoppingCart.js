// The ShoppingCart component will define the event handler function
// And update its own state
// Which will re-render the list component

import React from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import CartHeader from './CartHeader';
import AddItem from './AddItem';
import CartItems from './CartItems';
import CartFooter from './CartFooter';

// Class Component
class ShoppingCart extends React.Component {
  constructor(props) {
    super(props)
    this.state = { items: props.items }
  }

  itemWasAdded = (item) => {
    item.id = this.state.items.length
    this.setState({
      items: [
        item,
        ...this.state.items,
      ]
    })
  }

  render() {
    return (
      <div>
        <CartHeader />
        <AddItem products={ this.props.products } itemAdded={ this.itemWasAdded } />
        <CartItems items={ this.state.items } />
        <CartFooter copyright={ this.props.copyright } />
      </div>
    )
  }

}

export default ShoppingCart

// Functional Component

// const ShoppingCart = ({ copyright, items }) => (
//   <div>
//     <CartHeader />
//     <CartItems items={ items } />
//     <CartFooter copyright={ copyright } />
//   </div>
// )
