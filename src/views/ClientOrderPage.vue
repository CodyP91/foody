<template>
    <div>
      <h1>Orders</h1>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Client Name</th>
            <th>Restaurant Name</th>
            <th>Items</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order.id">
            <td>{{ order.id }}</td>
            <td>{{ order.client_name }}</td>
            <td>{{ order.restaurant_name }}</td>
            <td>
              <ul>
                <li v-for="item in order.items" :key="item.id">{{ item.name }}</li>
              </ul>
            </td>
            <td>{{ order.total_price }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'ClientOrderPage',
    data() {
      return {
        orders: [],
      };
    },
    mounted() {
      this.fetchOrders();
    },
    methods: {
      fetchOrders() {
        axios
          .get('https://foodie.bymoen.codes/api/orders', {
            headers: {
              token: this.$store.getters.token,
            },
          })
          .then((response) => {
            this.orders = response.data;
          })
          .catch((error) => {
            console.error(error);
          });
      },
    },
  };
  </script>
  