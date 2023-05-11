<template>
    <div>
        <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/clientprofile">Client Profile</router-link> |
            <router-link to="/clientlogin">Client Login</router-link> |
            <router-link to="/clientsignup">Client Sign Up</router-link> |
            <router-link to="/restaurantlogin">Restaurant Login</router-link> |
            <router-link to="/restaurantprofile">Restaurant Profile</router-link> |
            <router-link to="/shoppingcart">Shopping Cart</router-link> |
            <router-link to="/clientorderpage">Client Order Page</router-link> |



        </nav>
        <router-view />
    </div>
</template>
  
<script>
export default {
    name: 'App'
}
</script>
  
<style>
nav {
    background-color: #f8f8f8;
    padding: 1rem;
    margin-bottom: 2rem;
}

nav a {
    color: #333;
    text-decoration: none;
    margin-right: 1rem;
}

nav a.router-link-active {
    color: #42b983;
    font-weight: bold;
}
</style>
  