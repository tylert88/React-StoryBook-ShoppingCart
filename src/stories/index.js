/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Timer from '../components/Timer';
import Message from '../components/Message';
import CartHeader from '../components/CartHeader';
import CartFooter from '../components/CartFooter';
import CartItems from '../components/CartItems';
import CartItem from '../components/CartItem';
import AddItem from '../components/AddItem';
import ShoppingCart from '../components/ShoppingCart';
import Echo from '../components/Echo';
import TodoApp from '../components/TodoApp';

// MESSAGE
storiesOf('Message', module)
  .add('Hello World', () => <Message text="Hello world" />)
  .add("What's the time?", () => <Message text={new Date().toString()} />)
  .add('Custom', () => <Message text="Custom" />)


// TIMER
  storiesOf('Timer', module)
    .add('Show', () => <Timer />)

    const cartItem = { id: 1, product: { name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 }

    const items = [
      { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
      { id: 4, product: { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 }, quantity: 4 },
      { id: 5, product: { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 }, quantity: 1 },
      { id: 6, product: { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 }, quantity: 3 },
      { id: 7, product: { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 }, quantity: 1 },
      { id: 8, product: { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 }, quantity: 6 },
      { id: 9, product: { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 }, quantity: 1 },
    ]

    const products = [
      { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
      { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
      { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
      { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
      { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
      { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
      { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
      { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
      { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
]

// SHOPPING CART HEADER
  storiesOf('Shopping Cart', module)
    .add('Header', () => <CartHeader />)
    .add('Footer', () => <CartFooter copyright="1999" />)
    .add('Item', () => <CartItem item={ cartItem } />)
    .add('Items', () => <CartItems items={ items } />)
    .add('ShoppingCart', () => <ShoppingCart copyright="2012" items={ items } products={ products } />)
    .add('AddItem', () => <AddItem products={ products } itemAdded={ action('Item was added') }  />)



// TODO APP
  storiesOf('TodoApp', module)
    .add('App', () => <TodoApp />)

// TODO APP
  storiesOf('Echo', module)
    .add('Echo', () => <Echo original="Hello" />)
