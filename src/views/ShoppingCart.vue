<template>
    <div class="shopping-cart">
      <h1>Your Shopping Cart</h1>
      <ul>
        <li v-for="item in items" :key="item.id">
          <div>{{ item.name }}</div>
          <div>{{ item.price }}</div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ShoppingCart',
    
    data() {
      return {
        items: [
          { id: 1, name: 'Item 1', price: '$10' },
          { id: 2, name: 'Item 2', price: '$20' },
          { id: 3, name: 'Item 3', price: '$30' },
        ]
      }
    }
  }
  </script>
  
  <style>
  .shopping-cart {
    max-width: 800px;
    margin: 0 auto;
  }
  
  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    border-bottom: 1px solid #eee;
  }
  
  li:last-child {
    border-bottom: none;
  }
  
  li div {
    flex: 1;
  }
  
  li div:first-child {
    margin-right: 1rem;
  }
  
  li div:last-child {
    text-align: right;
  }
  </style>
  