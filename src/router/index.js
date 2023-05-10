import Vue from 'vue';
import VueRouter from 'vue-router';
import ClientSignUp from '@/views/ClientSignUp.vue';
import ClientLogin from '@/views/ClientLogin.vue';
import ClientProfile from '@/views/ClientProfile.vue';
import RestaurantOpenPage from '@/views/RestaurantOpenPage.vue';
import RestaurantLogin from '@/views/RestaurantLogin.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/clientsignup',
    name: 'clientsignup',
    component: ClientSignUp,
  },
  {
    path: '/clientlogin',
    name: 'clientlogin',
    component: ClientLogin,
  },
  {
    path: '/clientprofile',
    name: 'clientprofile',
    component: ClientProfile,
  },
  {
    path: '/restaurantopenpage',
    name: 'restaurantopenpage',
    component: RestaurantOpenPage,
  },
  {
    path: '/restaurantlogin',
    name: 'restaurantlogin',
    component: RestaurantLogin,
  },
  {
    path: '/',
    redirect: '/clientlogin', // Redirect to the client login page by default
  },
];

const router = new VueRouter({
  routes,
});

new Vue({
  router,
  render: (h) => h('router-view'), // Render the router-view component
}).$mount('#app');
