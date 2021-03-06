import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import CartHeader from "./CartHeader";
import AddItem from "./AddItem";
import CartItems from "./CartItems";
import CartFooter from "./CartFooter";

// BEFORE BUILD WITH CALLING AN API
// class ShoppingCart extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { items: props.items }
//   }
//
//   itemWasAdded = (item) => {
//     item.id = this.state.items.length
//     this.setState({
//       items: [
//         item,
//         ...this.state.items,
//       ]
//     })
//   }
//
//   render() {
//     return (
//       <div>
//         <CartHeader />
//         <AddItem products={ this.props.products } itemAdded={ this.itemWasAdded } />
//         <CartItems items={ this.state.items } />
//         <CartFooter copyright={ this.props.copyright } />
//       </div>
//     )
//   }
// }

class ShoppingCart extends React.Component {
  state = {
    items: [],
    products: []
  };

  // LOADS THE DATA FROM THE API ENDPOINT (INVOKED IMMEDIATELY AFTER A COMPONENT IS MOUNTED)
  async componentDidMount() {
    const items = await this.getItems();
    const products = await this.getProducts();
    const productsById = products.reduce((result, product) => {
      result[product.id] = product;
      return result;
    }, {});

    this.setState({
      products: {
        byId: productsById,
        all: products
      },
      items: items.map(item => ({
        ...item,
        product: productsById[item.product.id]
      }))
    });
  }
  // --------------------------------------------------------------------------------------------------------

  // FETCH ALL OF THE ITEMS
  async getItems() {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/items`);
    const json = await response.json();
    return json._embedded.items;
  }
  // --------------------------------------------------------------------------------------------------------

  // FETCH ALL OF THE PRODUCTS
  async getProducts() {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/api/products`
    );
    const json = await response.json();
    return json._embedded.products;
  }
  // --------------------------------------------------------------------------------------------------------

  // POST THE DATA FROM AN ADDED ITEM TO THE SERVER
  // THIS SAYS TO GRAB THE HREF FROM THE ITEMS LIST, THAT REFFERENCES THE PRODUCT ID
  // OF THE SELECTED ITEM, FROM THE PRODUCTS LIST
  itemWasAdded = async item => {
    const response = await fetch(item.product._links.items.href, {
      method: "POST",
      body: JSON.stringify({ quantity: item.quantity }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
    const newItem = await response.json();
    newItem.product = this.state.products.byId[newItem.product.id];

    this.setState({
      items: [newItem, ...this.state.items]
    });
  };
  // --------------------------------------------------------------------------------------------------------

  render() {
    return this.state.items.length && this.state.products.all.length ? (
      <div>
        <CartHeader />
        <AddItem
          products={this.state.products.all}
          itemAdded={this.itemWasAdded}
        />
        <CartItems items={this.state.items} />
        <CartFooter copyright={this.props.copyright} />
      </div>
    ) : (
      <div>Loading...</div>
    );
  }
}

export default ShoppingCart;
