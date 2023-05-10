<template>
    <div>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/clientprofile">Client Profile</router-link>
        <router-link to="/clientsignup">Client Sign Up</router-link>
        <router-link to="/clientlogin">Client Login</router-link>
      </nav>
      <router-view />
    </div>
  </template>
  