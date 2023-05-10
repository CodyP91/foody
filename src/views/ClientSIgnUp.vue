<template>
    <div>
      <h1>Client Sign Up</h1>
      <form @submit.prevent="signUp">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
  
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
  
        <button type="submit">Sign Up</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      signUp() {
        axios
          .post('https://foodie.bymoen.codes/api/client', {
            email: this.email,
            password: this.password,
           firstname: this.firstname,
           lastname: this.lastname,
              image_url: this.image_url,
                username: this.username,
                
          })
          .then((response) => {
            // Handle success, e.g., save token and navigate to the next page
            const token = response.data.token;
            // Save the token, for example, in localStorage or Vuex
            localStorage.setItem('token', token);
            // Navigate to the next page, e.g., using this.$router.push('/next-page')
            this.$router.push('/next-page');
          })
          .catch((error) => {
            // Handle error, e.g., show error message
            console.error(error);
          });
      },
    },
  };
  </script>
  