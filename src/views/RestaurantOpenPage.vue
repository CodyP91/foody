<template>
    <div>
      <h1>{{ restaurant.name }}</h1>
      <img :src="restaurant.image" :alt="restaurant.name" />
      <p>{{ restaurant.description }}</p>
  
      <h2>Menu</h2>
      <ul>
        <li v-for="item in menuItems" :key="item.id">
          <h3>{{ item.name }}</h3>
          <img :src="item.image" :alt="item.name" />
          <p>{{ item.description }}</p>
          <p>Price: {{ item.price }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        restaurant: {},
        menuItems: []
      };
    },
    mounted() {
      // Replace with the actual API endpoint and restaurant ID
      
      const restaurantApiUrl = `https://foodie.bymoen.codes/api/client`;
      const menuApiUrl = `https://foodie.bymoen.codes/api/client`;
  
      axios
        .get(restaurantApiUrl, {
          headers: {
            "x-api-key": "y4jzZdD1kW6pn0NcjmsQ"
          }
        })
        .then((response) => {
          this.restaurant = response.data;
        })
        .catch((error) => {
          console.error("Error getting restaurant data", error);
        });
  
      axios
        .get(menuApiUrl, {
          headers: {
            "x-api-key": "y4jzZdD1kW6pn0NcjmsQ"
          }
        })
        .then((response) => {
          this.menuItems = response.data;
        })
        .catch((error) => {
          console.error("Error getting menu items data", error);
        });
    }
  };
  </script>
  
  <style scoped>
  h1, h2 {
    margin-bottom: 20px;
  }
  
  img {
    width: 100%;
    max-width: 300px;
    height: auto;
    border-radius: 5px;
    margin-bottom: 15px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
    padding-bottom: 20px;
  }
  
  p {
    margin-bottom: 10px;
  }
  </style>
  
  