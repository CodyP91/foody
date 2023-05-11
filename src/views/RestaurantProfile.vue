<template>
    <div class="restaurant-profile">
      <h1>{{ restaurantName }}</h1>
      <div class="details">
        <p><strong>Location:</strong> {{ restaurantLocation }}</p>
        <p><strong>Cuisine:</strong> {{ restaurantCuisine }}</p>
        <p><strong>Description:</strong> {{ restaurantDescription }}</p>
        <p><strong>Main:</strong> {{ restaurantMain }}</p>
        <p><strong>Appetizers:</strong> {{ restaurantAppetizers }}</p>
        <p><strong>Drinks:</strong> {{ restaurantDrinks }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "RestaurantProfile",
    data() {
      return {
        restaurantName: "Foodie Restaurant",
        restaurantLocation: "123 Main St, Anytown, USA",
        restaurantCuisine: "Italian",
        restaurantDescription:
          "Foodie Restaurant is a family-owned Italian restaurant that has been serving delicious food to the community for over 20 years. Come in and try our famous pasta dishes!",
        restaurantMain: "Spaghetti and Meatballs",
        restaurantAppetizers: "Garlic Bread, Bruschetta",
        restaurantDrinks: "Wine, Beer, Cocktails",
      };
    },
  };
  </script>
  
  <style scoped>
  .restaurant-profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem;
  }
  
  .restaurant-profile h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  .restaurant-profile .details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: 1px solid #ccc;
    padding: 1rem;
    border-radius: 4px;
    margin-top: 1rem;
  }
  
  .restaurant-profile .details p {
    margin: 0.5rem 0;
  }
  </style>
  