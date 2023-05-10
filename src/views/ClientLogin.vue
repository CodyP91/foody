<template>
  <div>
    <form @submit.prevent="logIn">
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Log In</button>
    </form>
    <div class="links-container">
      <router-link to="/clientprofile" class="link">Go to Client Profile</router-link>
      <router-link to="/clientsignup" class="link">Don't have an account? Sign Up</router-link>
      <router-link to="/restaurantlogin" class="link">Restaurant Login</router-link>
      <router-link to="/restaurantprofile" class="link">Restaurant Profile</router-link>
    </div>
    <button @click="logOut">Log Out</button>
  </div>
</template>

<style>
.link {
  color: blue;
  text-decoration: underline;
  margin-right: 10px;
}

.links-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>

  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        email: "",
        password: "",
        token: "",
      };
    },
    methods: {
      logIn() {
        axios
          .post("https://foodie.bymoen.codes/api/client-login", {
            email: this.email,
            password: this.password,
          })
          .then((response) => {
            // Handle success, e.g., save token and navigate to the next page
            this.token = response.data.token;
            console.log("Logged in:", response.data);
          })
          .catch((error) => {
            // Handle error, e.g., show error message
            console.error("Error logging in:", error);
          });
      },
      logOut() {
        axios
          .delete("https://foodie.bymoen.codes/api/client-login", {
            headers: {
              token: this.token,
            },
          })
          .then(() => {
            // Handle success, e.g., remove token and navigate to the login page
            this.token = "";
            console.log("Logged out");
          })
          .catch((error) => {
            // Handle error, e.g., show error message
            console.error("Error logging out:", error);
          });
      },
    },
  };
  </script>
  