<template>
  <div class="container">
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" class="form-control" id="email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password" v-model="password" required>
      </div>
      <button type="submit" class="btn btn-primary">Log in</button>
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
      token: '',
    };
  },
  methods: {
    login() {
      axios.post('https://foodie.bymoen.codes/api/restaurant-login', {
        email: this.email,
        password: this.password,
      })
      .then((response) => {
        // Handle success, e.g., save token and navigate to the next page
        this.token = response.data.token;
        console.log('Logged in:', response.data);
      })
      .catch((error) => {
        // Handle error, e.g., show error message
        console.error('Error logging in:', error);
      });
    },
  },
};
</script>

<style>
.container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
}

input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

button[type="submit"] {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #0069d9;
}
</style>
