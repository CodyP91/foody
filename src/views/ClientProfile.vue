<template>
  <div>
    <h2>Client Profile</h2>
    <form>
      <label for="firstName">First Name:</label>
      <input type="text" id="firstName" v-model="firstName">

      <label for="lastName">Last Name:</label>
      <input type="text" id="lastName" v-model="lastName">

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email">

      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username">

      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password">
    </form>

    <button @click="getClientInfo">Get Client Info</button>
    <button @click="updateClientInfo">Update Client Info</button>
    <button @click="deleteClient">Delete Client</button>

    <div v-if="clientInfo">
      <h3>Client Information:</h3>
      <p>First Name: {{ clientInfo.firstName }}</p>
      <p>Last Name: {{ clientInfo.lastName }}</p>
      <p>Email: {{ clientInfo.email }}</p>
      <p>Username: {{ clientInfo.username }}</p>
    </div>

    <div v-if="updateSuccess">
      <p>Client information updated successfully!</p>
    </div>

    <div v-if="updateError">
      <p>Error updating client information. Please try again.</p>
    </div>

    <div v-if="deleteSuccess">
      <p>Client deleted successfully!</p>
    </div>

    <div v-if="deleteError">
      <p>Error deleting client. Please try again.</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      clientId: '',
      token: '',
      clientInfo: {},
      updatedClientInfo: {},
      lastName: '',
      email: '',
      username: '',
      password: '',
      updateSuccess: false,
      updateError: false,
      deleteSuccess: false,
      deleteError: false
    };
  },
  methods: {
    getClientInfo() {
      axios
        .get(`https://foodie.bymoen.codes/api/client`, {
          headers: {
            'x-api-key': `y4jzZdD1kW6pn0NcjmsQ`
          },
          params: {
            client_id: this.clientId
          }
        })
        .then((response) => {
          this.clientInfo = response.data;
        },)
        .catch((error) => {
          console.error(error);
        });
    },

    updateClientInfo() {
      axios
        .patch(
          `https://foodie.bymoen.codes/api/client`,
          this.updatedClientInfo,
          {
            headers: {
              'x-api-key': `y4jzZdD1kW6pn0NcjmsQ`,
              token: this.token
            }
          }
        )
        .then(() => {
          this.updateSuccess = true;
          this.updateError = false;
          this.getClientInfo();
        })
        .catch((error) => {
          console.error(error);
          this.updateSuccess = false;
          this.updateError = true;
        });
    },

    deleteClient() {
      axios
        .delete(`https://foodie.bymoen.codes/api/client`, { 
          headers: {  'x-api-key': `y4jzZdD1kW6pn0NcjmsQ`,
    token: this.token
  },
  data: {
    password: this.password
  }
})
.then(() => {
  this.deleteSuccess = true;
  this.deleteError = false;
})
.catch((error) => {
  console.error(error);
  this.deleteSuccess = false;
  this.deleteError = true;
});
}
}
};