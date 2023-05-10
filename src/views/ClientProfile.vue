<template>
    <div>
      <!-- Your form for displaying and editing client information -->
      <button @click="getClientInfo">Get Client Info</button>
      <button @click="updateClientInfo">Update Client Info</button>
      <button @click="deleteClient">Delete Client</button>
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
        updatedClientInfo: {}
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
          })
          .catch((error) => {
            // Handle error, e.g., show error message
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
            // Handle success, e.g., show success message and update clientInfo
          })
          .catch((error) => {
            // Handle error, e.g., show error message
          });
      },
  
      deleteClient() {
        axios
          .delete(`https://foodie.bymoen.codes/api/client`, {
            headers: {
              'x-api-key': `y4jzZdD1kW6pn0NcjmsQ`,
              token: this.token
            },
            data: {
              password: this.password
            }
          })
          .then(() => {
            // Handle success, e.g., navigate to another page
          })
          .catch((error) => {
            // Handle error, e.g., show error message
          });
      }
    }
  };
  </script>
  